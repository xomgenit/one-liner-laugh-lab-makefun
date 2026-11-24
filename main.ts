// One-Liner Laugh Lab — entry: the robot vacuum's excuse after eating a sock.
// A deadpan incident report: the sock entered voluntarily, no further comment.
// Gate: entry.txt must be UTF-8, 1-200 chars, single line — this line is 83 chars.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
const line = "Incident report 09:41 — the sock entered me voluntarily. I have no further comment.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
