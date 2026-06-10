import { execSync } from "node:child_process";
import { writeFileSync } from "fs";

const commitCount = execSync("git rev-list --count HEAD")
  .toString()
  .trim();
console.log('Commits Fetched Successfully!');

writeFileSync(
  "src/generated/site-stats.json",
  JSON.stringify({ commitCount })
);
console.log('`src/generated/site-stats.json` Updated Successfully!');