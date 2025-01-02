import { readdirSync } from "fs"
import { join } from "path"

export const listFiles = (dir: string): string[] =>
    readdirSync(dir, { withFileTypes: true }).flatMap(dirent =>
        dirent.isFile() ? [join(dir, dirent.name)] : listFiles(join(dir, dirent.name))
    )
