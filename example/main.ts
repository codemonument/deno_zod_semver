import { } from "@/mod.ts";
import * as log from "@std/log";

try {
  log.info(`Your module is currently empty! Add some code to the lib folder and export it in mod.ts!`);
} catch (error) {
  console.error(error);
  Deno.exit();
}
