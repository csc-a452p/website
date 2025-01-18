import { Metadata } from "next";
import Link from "next/link";
import ListItem from "../components/ListItem";

export const metadata: Metadata = {
    title: 'PDFライブラリ',
}

export default function Home() {

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
                                    <ListItem href={"/pdflib/RemoteControlWithSensor"} >スマートフォンのセンサを利用したパソコンの遠隔操作</ListItem>
                                    <ListItem href={"/pdflib/makeAGirlFriend"} >彼女作るンゴ</ListItem>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </>
    );
}
