# Changelog

## 1.3.0 & 1.3.1

- sync deno.land and npm
- upgrade dependencies

## 1.2.0

- upgrade zod to 3.22.2
- add test for using ZodSemver branded type in an optional union with 'latest' string and with 'latest' as default

As Fallback:

- add `ZodSemverUnbranded` even though it only types to string, but the parsing is still attached and returns string,
  instead of returning the kind-of-special 'branded' type `ZodSemver`
  This may allow easier combination with certain context requirements when using this ZodSemver library,
  for example: using this semver in a union with "latest"

## 1.1.0

- Added the branded type `ZodSemver` for use in functions that require a parsed semver string

## 1.0.2

small fixes

## 1.0.1

small fixes

## 1.0.0

initial release