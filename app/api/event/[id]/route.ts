import { DATA_PATH } from "@/app/utils/dataConst";
import { existsSync, readFileSync } from "fs";
import { join } from "path";

export const dynamic = 'force-static'

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const id = (await params).id;

    const path = join(DATA_PATH, "event", id + ".json");

    if (!existsSync(path)) {
        return Response.json({}, { status: 400 })
    }

    // file exists
    const f = JSON.parse(readFileSync(path, "utf-8")) as goods;
    return Response.json(f)
}
