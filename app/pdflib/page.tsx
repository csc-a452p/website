import { Metadata } from "next";
import Link from "next/link";
import ListItem from "../components/ListItem";
import { join } from "path";
import { DATA_PATH } from "../utils/dataConst";
import { readFileSync } from "fs";
import { pdflibList } from "@/types/pdflibList";

export const metadata: Metadata = {
    title: 'PDFライブラリ',
}

export default function Home() {
    const path = join(DATA_PATH, "pdflib", "list.json");
    const f: pdflibList = JSON.parse(readFileSync(path, "utf-8"));

    return (
        <>
            <main className="w-full md:m-auto flex gap-2">
                <div className={`w-full bg-neutral-800 border border-neutral-700 rounded`}>
                    <div className="bg-neutral-700 p-3 pl-5">
                        <h1 className="w-full font-bold text-3xl mb-1">PDFライブラリ</h1>
                        <div><Link href={"/"} className="underline underline-offset-2" >トップ</Link> &gt; PDFライブラリ</div>
                    </div>

                    <div className="mx-2 flex flex-col gap-3 p-3">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold">PDFライブラリ</h2>
                            <div className="mx-3 flex flex-col gap-2">
                                <ul className="list-disc ml-5">
                                    {/* 雑記に記事を追加する場合はdata/pdflib/list.jsonにidをキー、タイトルを値として書き加えて、public/assets/pdflib/にpdfファイルを追加してください */}
                                    {Object.keys(f).map((e) => (
                                        <ListItem href={"/pdflib/" + e} key={e}>{f[e]}</ListItem>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </>
    );
}
