import DLink from "@/app/components/DLink";
import ErrataItem from "@/app/components/ErrataItem";
import { listFiles } from "@/app/utils/listFiles";
import { readFileSync } from "fs";
import { join, parse } from "path";

export const dynamic = 'force-static';
export const dynamicParams = false;

const DATA_DIR = "data"


export function generateStaticParams() {
    const paths: { id: string }[] = []

    const currentDir = process.cwd();
    const files = listFiles(join(currentDir, DATA_DIR, "errata"));

    files.forEach(e => {
        paths.push({
            id: parse(e).name,
        })
    })
    return paths
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const path = join(process.cwd(), DATA_DIR, "goods", id + ".json");
    const f = JSON.parse(readFileSync(path, "utf-8")) as goods;

    return {
        title: f.title,
    }
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    const pathGoods = join(process.cwd(), DATA_DIR, "goods", id + ".json");
    const pathErrata = join(process.cwd(), DATA_DIR, "errata", id + ".json");

    const goods = JSON.parse(readFileSync(pathGoods, "utf-8")) as goods;
    const errata = JSON.parse(readFileSync(pathErrata, "utf-8")) as Errata;

    return (
        <>
            <main className="w-full md:m-auto flex gap-2">
                <div className={`w-full bg-neutral-800 border border-neutral-700 rounded`}>
                    <div className="bg-neutral-700 p-3 pl-5">
                        <h1 className="w-full font-bold text-3xl mb-1">{goods.title} 正誤情報</h1>
                        <div><DLink href={"/"}>トップ</DLink> &gt; <DLink href="/errata">正誤情報</DLink> &gt; {goods.title}</div>
                    </div>

                    <div className="mx-2 flex flex-col gap-3 p-3">
                        {<div>本同好会作成物に下記の通り誤りがございました. お詫びして訂正いたします.</div>}
                        {/* 追加する方へ ErrataItemをコピペで増やしてください 各引数を適切に設定してください */}    
                        {
                            Object.keys(errata).map(e => {
                                return <ErrataItem
                                    key={e}
                                    target={`${e == "1" ? "初" : `第${e}`}版`}
                                    errata={errata[e]}
                                />
                            })
                        }


                    </div>

                </div>
            </main>
        </>
    );
}
