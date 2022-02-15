export const EPOCH = 1420070400000n;

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
  const distance = BigInt(Date.now()) - EPOCH;
  const snowflake = (distance << 22n) | (1n << 17n) | (1n << 12n);

  const min = 17;
  const max = snowflake.toString().length;

  let regex = "\\d{" + [min, max] + "}";
  let flags = "";

  if (exact) regex = "^" + regex + "$";
  if (global) flags += "g";
  if (multiline) flags += "m";

  return new RegExp(regex, flags);
}

export default generate();