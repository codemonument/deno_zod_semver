/**
 * Export all functionality of your module here,
 * which should be used by other people
 */

import { z } from "https://deno.land/x/zod@v3.21.4/mod.ts";

/**
 * This RegEx is able to detect SemVer Strings based on the official specification.
 * This is the vairant with numbered capture groups, since JavaScript does support namend capture groups only since ES2018.
 * Also, grouping is not relevant for validating it with zod :)
 *
 * This RegEx is valid as of 2023-04-27.
 * If it reports false positives or false negatives, please check the website for an update!
 * See here: https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
 */
export const regexSemverNumbered =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

export const ZodSemver = z.string().regex(regexSemverNumbered);
