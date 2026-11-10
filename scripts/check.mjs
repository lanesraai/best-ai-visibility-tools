// Checks README.md: every table's first cell is a link, each table is in
// alphabetical order, and no link appears twice. Run: node scripts/check.mjs
import { readFileSync } from "node:fs";

const lines = readFileSync(new URL("../README.md", import.meta.url), "utf8").split("\n");
const errors = [];
const seen = new Map();
let section = "";
let previous = null;

for (const [i, line] of lines.entries()) {
  if (line.startsWith("## ")) {
    section = line.slice(3).trim();
    previous = null;
    continue;
  }
  if (!line.startsWith("|")) {
    previous = null;
    continue;
  }
  const first = line.split("|")[1].trim();
  if (/^-+$/.test(first) || /^(Tool|Project)$/.test(first)) continue; // header rows
  const match = first.match(/^\[([^\]]+)\]\((https:\/\/[^)\s]+)\)$/);
  if (!match) {
    errors.push(`Line ${i + 1} (${section}): first cell must be [Name](https://...), found "${first}"`);
    continue;
  }
  const [, name, url] = match;
  if (/[?&](utm_|ref=)/.test(url)) errors.push(`Line ${i + 1}: remove tracking parameters from ${url}`);
  if (seen.has(url)) errors.push(`Line ${i + 1}: ${url} is already listed on line ${seen.get(url)}`);
  seen.set(url, i + 1);
  const key = name.toLowerCase();
  if (previous && key.localeCompare(previous) < 0) {
    errors.push(`Line ${i + 1} (${section}): "${name}" is out of alphabetical order`);
  }
  previous = key;
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`OK: ${seen.size} entries, all sections alphabetical, no duplicate links.`);
