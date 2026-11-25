// One Line of Earned Pride — writes a single line to $MAKEFUN_OUTPUT_DIR/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "He let go of the saddle, and for six wobbly metres his daughter rode alone while he ran behind her, cheering, out of breath.";

// Gate: the entry must be 1 to 240 characters, not only whitespace.
if (line.length < 1 || line.length > 240 || line.trim().length === 0) {
  throw new Error(`entry length ${line.length} is outside the 1-240 character gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
