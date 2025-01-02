import { join } from "path";
import { cwd } from "process";

export const DATA_PATH = join(cwd(), "data");
export const NEWLY_GOODS_PATH = join(DATA_PATH, "goods_newly.json")
