![Snowflake](https://util.bruhmomentlol.repl.co/twemoji/snowflake)

# Snowflake Regex

Generates a regex for Discord Snowflakes, its pretty simple

# Usage

```js
const snowflakeRegex = require("snowflake-regex"); // For ES6/TS use import snowflakeRegex, { generate } from 'snowflake-regex'
snowflakeRegex.default.test("296776625432035328"); // true
snowflakeRegex.default.test("balls 296776625432035328"); // false

const customSnowflakeRegex = snowflakeRegex.generate({
  exact: false,
  global: true,
  multiline: true
});

customSnowflakeRegex.test("balls 296776625432035328"); // true
"balls 296776625432035328".match(customSnowflakeRegex); // [ '296776625432035328' ]
"balls 296776625432035328".match(snowflakeRegex.default); // null
```