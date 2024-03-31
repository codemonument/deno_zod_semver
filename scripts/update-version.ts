import { simpleExec } from "https://deno.land/x/simple_exec@1.0.1/mod.ts";

// Script requires the new version as first argument
const version = Deno.args[0];
if (version === undefined) {
  throw new Error("Pass a semver as first argument!");
}

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
