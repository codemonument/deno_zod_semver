# Zod SemVer 

 A simple deno module by @codemonument with a zod schema for validating semver. 
 Uses official regex and is cross-posted to npm as zod-semver. 

 ## Usage

### Import in Deno

 ```ts
 import { ZodSemver } from "https://deno.land/x/zod_semver/mod.ts"
 ```

### Import in Node

 ```ts
 import { ZodSemver } from "zod-semver"
 ```

 ### Usage after Import

 ```ts

 // Use like any other Zod Schema: 
 ZodSemver.parse('1.0.0');

 // Or include in another Zod Schema like this: 

 const MyObjectSchema = z.object({
  version: ZodSemver, 
  name: z.string(), 
  age: z.number().optional()
 })

 ```

 ## Links 

 | Name     | Target |
 |----------|--------|
 | Git Repo | https://github.com/codemonument/deno_zod_semver  |
 | Deno     | https://deno.land/x/zod_semver  |
 | NPM      | https://www.npmjs.com/package/zod_semver  |