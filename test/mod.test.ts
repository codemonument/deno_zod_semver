import { assert, describe, it } from "std_testing";
import { regexSemverNumbered, ZodSemver } from "@/mod.ts";

describe(`mod.ts`, () => {
  it(`should export correct objects and types`, () => {
    assert(regexSemverNumbered);
    assert(ZodSemver);
  });
});
