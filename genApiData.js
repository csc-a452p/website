/* eslint-disable @typescript-eslint/no-require-imports */
const { unlinkSync, readdirSync, writeFileSync } = require("fs");
const { copySync } = require("fs-extra");
const { join, parse } = require("path");
const { cwd, exit } = require("process");


const listFiles = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap(dirent =>
    dirent.isFile() ? [join(dir, dirent.name)] : listFiles(join(dir, dirent.name))
)

const genIdList = (name) => {
    const fl = listFiles(join(cwd(), "public", "data", name))
    const idlist = fl.map(e => parse(e).name);

    const result = {}
    result[name] = idlist;

    writeFileSync(join(cwd(), "public", "data", name + ".json"), JSON.stringify(result))
}

copySync(join(cwd(), "data"), join(cwd(), "public", "data"))

// 各種リストの生成
genIdList("errata")
genIdList("event")
genIdList("goods")

// readme.mdの削除
unlinkSync(join(cwd(), "public", "data", "readme.md"))
exit(0);
