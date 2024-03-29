import { build, emptyDir } from "@deno/dnt";

const outPath = `./dist-npm`;

await emptyDir(outPath);

await build({
  entryPoints: ["./mod.ts"],
  outDir: outPath,
  typeCheck: false,
  test: true,
  importMap: "deno.jsonc",
  packageManager: "bun",
  shims: {
    // see JS docs for overview and more options
    deno: true,
  },
  mappings: {
    "npm:zod@^3.22.4": {
      name: "zod",
      version: "^3.22.4",
      peerDependency: true,
    },
  },
  package: {
    // package.json properties
    name: "zod-semver",
    version: Deno.args[0],
    description:
      `A simple deno module by @codemonument with a zod schema for validating semver. Uses official regex and is cross-posted to npm as zod-semver`,
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/codemonument/deno_zod_semver.git",
    },
    bugs: {
      url: "https://github.com/codemonument/deno_zod_semver/issues",
    },
  },
  postBuild() {
    // post build steps
    Deno.copyFileSync("LICENSE", `${outPath}/LICENSE`);
    Deno.copyFileSync("README.md", `${outPath}/README.md`);
  
  }
});
