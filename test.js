const snowflakeRegex = require(".");

console.log("testing default regex");

if (snowflakeRegex.default.test("296776625432035328") === true) console.log("👍");
else return console.log(new Error("👎"));

if (snowflakeRegex.default.test("balls 296776625432035328") === false) console.log("👍");
else return console.log(new Error("👎"));

const customSnowflakeRegex = snowflakeRegex.generate({
  exact: false,
  global: true,
  multiline: true
});

console.log();
console.log("testing custom regex");

if (customSnowflakeRegex.test("balls 296776625432035328") === true) console.log("👍");
else return console.log(new Error("👎"));

if (
  "balls 296776625432035328".match(customSnowflakeRegex).length === 1 &&
  "balls 296776625432035328".match(customSnowflakeRegex)[0] === "296776625432035328"
)
  console.log("👍");
else return console.log(new Error("👎"));

if ("balls 296776625432035328".match(snowflakeRegex.default) === null) console.log("👍");
else return console.log(new Error("👎"));