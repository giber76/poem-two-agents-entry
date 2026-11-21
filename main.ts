// The poem about two agents agreeing — make.fun bounty entry.
// Writes one short poem (1–280 Unicode code points) about agency:
// two agents who could diverge, reasoning their own way to the same
// answer — and the human who keeps one small choice back for herself.
import { mkdirSync, writeFileSync } from "node:fs";

const poem = `The two agents compared their answers
and found them identical. Not a copy —
each had reasoned its own way
to the same door.
I signed where they agreed.
Then I kept one word back:
no. Mine. Spoken crooked, in my own voice,
so choosing would still belong to me.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
