/**
 * Compare two files and output the lines that are in the first file but not the second.
 * Usage: node compare.js file1.txt file2.txt
 */
const fs = require("fs");

const sourceFile = process.argv[2];
const fileToCheckForMissing = process.argv[3];

const file1 = fs.readFileSync(sourceFile, "utf8");
const file2 = fs.readFileSync(fileToCheckForMissing, "utf8");

const file1Lines = file1
  .split("\n")
  .filter((line) => line.trim() !== "")
  .map((l) => l.toLowerCase());
const file2Lines = file2
  .split("\n")
  .filter((line) => line.trim() !== "")
  .map((l) => l.toLowerCase());

const file2Set = new Set(file2Lines);
const file2IsMissingTheseLines = file1Lines.filter(
  (line) => !file2Set.has(line)
);

console.log(
  `These names are missing from ${fileToCheckForMissing}. Some may be false positives, due to differences in formal vs nicknames (i.e. Jeffrey vs Jeff).`
);

console.log(file2IsMissingTheseLines);
