import { assert, assertThrows, describe, it } from "std_testing";
import { regexSemverNumbered, ZodSemver } from "@/mod.ts";
import { z } from "zod";

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

  it(`branded type works in a union with 'latest' string`, () => {
    z.union([ZodSemver, z.literal("latest")]);
  });

  it(`branded type works in an optional union with 'latest' string with 'latest' as default`, () => {
    z.union([ZodSemver, z.literal("latest")]).optional().default("latest");
  });
});
