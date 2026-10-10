#!/usr/bin/env node
/* toeslagrecht — parity harness. Reads a JSON list of case inputs on stdin, runs each through the
 * browser encoding (site/zorgtoeslag-regels.js with site/zorgtoeslag-parameters.js) and prints the
 * outcomes as JSON. tools/build.py check compares them with the Python encoding, case by case.
 * Licence: MIT. */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const site = path.join(__dirname, "..", "site");
const ctx = { console };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(site, "zorgtoeslag-parameters.js"), "utf8"), ctx);
const regels = require(path.join(site, "zorgtoeslag-regels.js"));

const cases = JSON.parse(fs.readFileSync(0, "utf8"));
const out = cases.map((c) => {
  try {
    return { id: c.id, uitkomst: regels.berekenAlsTekst(c.invoer, ctx.PARAMETERS) };
  } catch (e) {
    return { id: c.id, fout: String(e && e.message || e) };
  }
});
process.stdout.write(JSON.stringify(out));
