// Fridge Roast: One Line, Biggest Laugh
// Deterministic, zero-dependency emitter. Writes exactly one roast line to
// /output/entry.txt (no trailing newline) and verifies it byte-exact.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "My smart fridge's touchscreen lags longer than the milk lasts — it freezes, just never the food.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 chars, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error(
    "byte-exact verification failed: /output/entry.txt does not match the entry line",
  );
}

console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
