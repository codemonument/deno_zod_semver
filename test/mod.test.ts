import { assert, assertThrows, describe, it } from "std_testing";
import { regexSemverNumbered, ZodSemver } from "@/mod.ts";

describe(`mod.ts`, () => {
  it(`should export correct objects and types`, () => {
    assert(regexSemverNumbered);
    assert(ZodSemver);
  });

  it(`should report 1.5.5 as valid semver`, () => {
    ZodSemver.parse("1.5.5");
  });

  it(`should throw for input '1a.5.5' `, () => {
    assertThrows(() => ZodSemver.parse("1a.5.5"));
  });
});
