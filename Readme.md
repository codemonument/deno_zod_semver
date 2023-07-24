# Zod SemVer

A simple deno module by @codemonument with a zod schema for validating semver.
Uses official regex and is cross-posted to npm as zod-semver.

## Usage

### Import in Deno

```ts
import {ZodSemver} from 'https://deno.land/x/zod_semver/mod.ts';
```

### Import in Node

```ts
import {ZodSemver} from 'zod-semver';
```

### Usage after Import

```ts
// Use like any other Zod Schema:
ZodSemver.parse('1.0.0');

// Or include in another Zod Schema like this:

const MyObjectSchema = z.object({
	version: ZodSemver,
	name: z.string(),
	age: z.number().optional(),
});
```

## Using the branded ZodSemver type

At it's base, the ZodSemver type is simply a more refined string. So the TS type for it is string.
However, sometimes it might be useful for a function to make sure that it only receives an already parsed semver string.
This is possible via the branded `ZodSemver` type.

'branded' means that the type is a string, but with a special property atached that makes it unique.
See the zod docs for more information: <https://zod.dev/?id=brand>

## Links

| Name     | Target                                          |
| -------- | ----------------------------------------------- |
| Git Repo | https://github.com/codemonument/deno_zod_semver |
| Deno     | https://deno.land/x/zod_semver                  |
| NPM      | https://www.npmjs.com/package/zod-semver        |

## Changelog

### 1.1.0

- Added the branded type `ZodSemver` for use in functions that require a parsed semver string

### 1.0.2

small fixes

### 1.0.1

small fixes

### 1.0.0

initial release
