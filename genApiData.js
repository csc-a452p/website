/* eslint-disable @typescript-eslint/no-require-imports */
const { unlinkSync } = require("fs");
const { copySync } = require("fs-extra");
const { join } = require("path");
const { cwd, exit } = require("process");

copySync(join(cwd(), "data"), join(cwd(), "public", "data"))

unlinkSync(join(cwd(), "public", "data", "readme.md"))
exit(0);
