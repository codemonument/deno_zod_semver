import { describe, it } from "@std/testing/bdd";
import { assert, assertThrows } from "@std/assert";
import { regexSemverNumberedGroups, ZodSemver } from "@/src/main.ts";
import { z } from "zod";

describe(`main.ts`, () => {
  it(`should export correct objects and types`, () => {
    assert(regexSemverNumberedGroups);
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
