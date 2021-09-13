const now = Date.now();
const epoch = 1420070400000n;
const distance = BigInt(now - epoch);
const snowflake = (distance << 22n) | (1n << 17n) | (1n << 12n);

const min = 17;
const max = snowflake.toString().length;
const int = "\\d";
const regex = int + "{" + [min, max] + "}";

module.exports = new RegExp(regex);
module.exports.exact = new RegExp("^" + regex + "$");