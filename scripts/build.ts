import { simpleExec } from "https://deno.land/x/simple_exec@1.0.1/mod.ts";
import { ZodSemver } from "@/src/main.ts";

// Script requires the new version as first argument
const version = Deno.args[0];

if (version === undefined) {
  throw new Error("Pass a semver as first argument!");
}

ZodSemver.parse(version);

const dntBuild = await simpleExec("deno", [
  "run",
  "-A",
  "scripts/dnt-build.ts",
  version,
]);

// update-denoconfig --config ./deno.jsonc --kv.version=1.0.0 --kv.tasks.echo=\"echo \\\"Hello World!\\\"\"
// install this cli by: deno install -g jsr:@codemonument/update-denoconfig
const versionUpdate = await simpleExec("update-denoconfig", [
  "--config=./deno.jsonc",
  `--kv.version=${version}`,
]);

console.log({ dntBuild, versionUpdate });
