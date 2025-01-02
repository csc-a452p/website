import { Metadata } from "next";
import DLink from "../components/DLink";
import { listFiles } from "../utils/listFiles";
import { join, parse } from "path";
import { cwd } from "process";
import { readFileSync } from "fs";

export const metadata: Metadata = {
    title: '正誤情報',
}

export default function Home() {
    const errataList = listFiles(join(cwd(), "data", "errata"));

    const wrongIdList = errataList.map(e => {
        const id = parse(e).name;

        const goods = JSON.parse(readFileSync(join(cwd(), "data", "goods", id + ".json"), "utf-8")) as goods;
        const errata = JSON.parse(readFileSync(join(cwd(), "data", "errata", id + ".json"), "utf-8")) as Errata;
        
        const hanList = Object.keys(errata).map(e => e == "1" ? "初版": `第${e}版`);

        return {
            item: `${goods.title} (${hanList.join(", ")})`,
            href: `/errata/${id}`
        }
    })

    return (
        <>
            <main className="w-full md:m-auto flex gap-2">
                <div className={`w-full bg-neutral-800 border border-neutral-700 rounded`}>
                    <div className="bg-neutral-700 p-3 pl-5">
                        <h1 className="w-full font-bold text-3xl mb-1">正誤情報</h1>
                        <div><DLink href={"/"}>トップ</DLink> &gt; 正誤情報</div>
                    </div>

                    <div className="mx-2 flex flex-col gap-3 p-3">
                        <div>現在、以下の作成物に正誤情報があります。</div>
                        <ul className="list-disc ml-6">
                            {
                                wrongIdList.map(e => {
                                    return <li>
                                        <DLink href={e.href}>{e.item}</DLink>
                                    </li>
                                })
                            }
                        </ul>
                    </div>

                </div>
            </main>
        </>
    );
}
