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
  "run",
  "-A",
  "scripts/dnt-build.ts",
  version,
]);

console.log("\n==dnt stdout==\n", dntBuild.stdout);
console.log("\n==dnt stderr==\n", dntBuild.stderr);

// update-denoconfig --config ./deno.jsonc --kv.version=1.0.0 --kv.tasks.echo=\"echo \\\"Hello World!\\\"\"
// install this cli by: deno install -g jsr:@codemonument/update-denoconfig
// example command: update-denoconfig --config=deno.jsonc --kv.version=1.0.0
// deno run --allow-read=.,deno.jsonc --allow-write=.,deno.jsonc --allow-net=jsr.io jsr:@codemonument/update-denoconfig@1.0.6 --config ./deno.jsonc --kv.version=1.0.0 --kv.tasks.echo=\"echo \\\"Hello World!\\\"\"

const denoVersionUpdateCommand =
  `run --allow-read=.,deno.jsonc --allow-write=.,deno.jsonc --allow-net=jsr.io jsr:@codemonument/update-denoconfig@1.0.6 --config ./deno.jsonc --kv.version=${version}`
    .split(" ");

const versionUpdate = await simpleExec("deno", denoVersionUpdateCommand);

if (versionUpdate.stderr === "" && versionUpdate.stdout === "") {
  console.log("Version updated to ", version);
} else {
  console.log("version update stdout", versionUpdate.stdout);
  console.log("version update stderr", versionUpdate.stderr);
}
