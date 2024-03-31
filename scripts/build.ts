import { simpleExec } from "https://deno.land/x/simple_exec@1.0.1/mod.ts";
import { ZodSemver } from "@/src/main.ts";

// Script requires the new version as first argument
const version = Deno.args[0];
if (version === undefined) {
  throw new Error("Pass a semver as first argument!");
}

ZodSemver.parse(version);

console.log("Building version", version);
console.log("CWD", Deno.cwd());

const dntBuild = await simpleExec("deno", [
  "task",
  "build-dnt",
  version,
]);

console.log("\n==dnt stdout==\n", dntBuild.stdout);
console.log("\n==dnt stderr==\n", dntBuild.stderr);

const updateVersion = await simpleExec("deno", [
  "task",
  "update-version",
  version,
]);

console.log("\n==update-version stdout==\n", updateVersion.stdout);
