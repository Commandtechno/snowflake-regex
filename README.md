![Snowflake](https://util.bruhmomentlol.repl.co/twemoji/snowflake)

# Snowflake regex

Generates a regex for Discord Snowflakes, its pretty simple

```js
const regex = require("snowflake-regex"); // For ES6/TS use import * as regex from 'snowflake-regex'
regex.test("296776625432035328"); // true
regex.test("balls 296776625432035328"); // false

const customRegex = regex.generate({ exact: false, global: true, multiline: true });
"balls 296776625432035328".match(customRegex); // [ '296776625432035328' ]
```