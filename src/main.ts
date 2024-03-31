/**
 * @module
 * This is the main module for the deno module "zod-semver".
 * See usage examples in the README.md
 */

import { z } from "zod";

/**
 * This RegEx is able to detect SemVer Strings based on the official specification.
 * This is the vairant with numbered capture groups, since JavaScript does support namend capture groups only since ES2018.
 * Also, grouping is not relevant for validating it with zod :)
 *
 * This RegEx is valid as of 2023-04-27.
 * If it reports false positives or false negatives, please check the website for an update!
 * See here: https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
 */
export const regexSemverNumberedGroups =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

/**
 * This ZodSchema is able to detect SemVer Strings based on the official specification and types its output as "string".
 */
export const ZodSemverUnbranded = z.string().regex(
  regexSemverNumberedGroups,
);

/**
 * The inferred type of the ZodSemverUnbranded schema.
 */
export type ZodSemverUnbranded = z.infer<typeof ZodSemverUnbranded>;

/**
 * Normally, a semver is only a string.
 * However, sometimes we want to use a semver string as a parameter somewhere and make sure that it is a valid semver,
 * without having to parse it again.
 * Therefore we can provide Semver as a branded zod type, which means,
 * that this type will be recognized by typescript as if it where it's own class, and not only a string.
 */
export const ZodSemver = ZodSemverUnbranded.brand<
  "ZodSemver"
>();

/**
 * The inferred type of the ZodSemver schema.
 */
export type ZodSemver = z.infer<typeof ZodSemver>;
