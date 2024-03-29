import * as json5 from "npm:json5-writer";
import * as jsonc from "jsr:@std/jsonc";

// 1. Load the config file two times, once with the deno std jsonc parser (which doesn't support stringification)
// and once with the json5-writer package parser
const denoJsoncParsedOnly = jsonc.parse(await Deno.readTextFile("deno.jsonc"));
const denoJsonc = json5.load(await Deno.readTextFile("deno.jsonc"));

if (typeof denoJsoncParsedOnly !== "object") {
  throw new Error("Expected a root object for deno.jsonc content");
}

denoJsonc.write({
  // import all the properties from existing deno.jsonc, so that json5-writer doesn't remove them
  ...denoJsoncParsedOnly,
  // update the properties we want to update
  //   version: Deno.args[0],
  version: "1.3.4",
});

// for debugging: output all ast paths there are
// denoJsonc.ast.forEach((path: any) => {
//   console.log(path);
// });

await Deno.writeTextFile(
  "deno.jsonc",
  denoJsonc.toSource({
    quote: "double",
    trailingComma: false,
    quoteKeys: true,
  }),
);
