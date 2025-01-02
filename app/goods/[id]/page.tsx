import GoodsBook from "@/app/components/goods/book";
import { DATA_PATH } from "@/app/utils/dataConst";
import { listFiles } from "@/app/utils/listFiles";
import { readFileSync } from "fs";
import { join, parse } from "path";

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
    const paths: { id: string }[] = []

    const files = listFiles(join(DATA_PATH, "goods"));
    files.forEach(e => {
        paths.push({
            id: parse(e).name,
        })
    })
    return paths
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const path = join(DATA_PATH, "goods", id + ".json");
    const f = JSON.parse(readFileSync(path, "utf-8")) as goods;

    return {
        title: f.title,
    }
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    const path = join(DATA_PATH, "goods", id + ".json");
    const f = JSON.parse(readFileSync(path, "utf-8")) as goods;

    if (f.type == "book") {
        const p = f as goodsBook;

        return <GoodsBook id={id} p={p} />
    }
    else if (f.type == "item") {
        throw new Error("販売物のitemタイプは未実装です");
    }
    else {
        throw new Error(`販売物ページ${id} の生成中に予期しないタイプ${f.type}が渡されました`);
    }
}
