const now = Date.now();
const epoch = 1420070400000n;
const distance = BigInt(now) - epoch;
const snowflake = (distance << 22n) | (1n << 17n) | (1n << 12n);

const min = 17;
const max = snowflake.toString().length;
const int = "\\d";
const regex = int + "{" + [min, max] + "}";

function generate(
  { exact = true, global = false, multiline = false } = {
    exact: true,
    global: false,
    multiline: false
  }
) {
  let res = regex;
  let flags = "";

  if (exact) res = "^" + res + "$";
  if (global) flags += "g";
  if (multiline) flags += "m";
  return new RegExp(res, flags);
}

module.exports = generate();
module.exports.generate = generate;
