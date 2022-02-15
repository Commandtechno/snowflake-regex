const now = Date.now();
const epoch = 1420070400000n;
const distance = BigInt(now) - epoch;
const snowflake = (distance << 22n) | (1n << 17n) | (1n << 12n);

const min = 17;
const max = snowflake.toString().length;
const int = "\\d";
const baseRegex = int + "{" + [min, max] + "}";

export interface Options {
  exact?: boolean;
  global?: boolean;
  multiline?: boolean;
}

export function generate(
  { exact, global, multiline }: Options = {
    exact: true,
    global: true,
    multiline: true
  }
) {
  let regex = baseRegex;
  let flags = "";

  if (exact) regex = "^" + regex + "$";
  if (global) flags += "g";
  if (multiline) flags += "m";

  return new RegExp(regex, flags);
}

export default generate();