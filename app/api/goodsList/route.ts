import { DATA_PATH } from "@/app/utils/dataConst";
import { listFiles } from "@/app/utils/listFiles";
import { join, parse } from "path";

export const dynamic = 'force-static'

export async function GET() {
    const goodsPathList = listFiles(join(DATA_PATH, "goods"));

    const result: string[] = goodsPathList.map(e => parse(e).name);

    return Response.json(result)
}
