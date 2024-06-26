# Zod SemVer

[![JSR](https://jsr.io/badges/@codemonument/zod-semver)](https://jsr.io/@codemonument/zod-semver/)
[![NPM Version](https://img.shields.io/npm/v/zod-semver?style=flat&logo=npm&color=CB3435)
](https://www.npmjs.com/package/zod-semver)

A simple deno module by @codemonument with a zod schema for validating semver.
Uses official regex.

> [!WARNING]
> Not published to ~~[deno.land/x/zod_semver](https://deno.land/x/zod_semver)~~ anymore! Use the jsr package instead:  
> `jsr:@codemonument/zod-semver`!

## Usage

### Import in Deno

```bash
deno add @codemonument/zod-semver
```

```ts
import {ZodSemver} from '@codemonument/zod-semver';
```

### Import in Node

```bash
npm add @codemonument/zod-semver
```

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
| JSR      | https://jsr.io/@codemonument/zod-semver/        |
| NPM      | https://www.npmjs.com/package/zod-semver        |

## Create new version of this package (for maintainers)

1. Update CHANGELOG.md with your changes
2. Run `deno task uv <newVersion>`
3. Run `deno task test`
4. Commit changes & add git tag for your version
5. Push changes & tags => github actions will deploy
