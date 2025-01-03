import { Metadata } from "next";
import Link from "next/link";
import ListItem from "../components/ListItem";

export const metadata: Metadata = {
    title: '雑記',
}

export default function Home() {

    return (
        <>
            <main className="w-full md:m-auto flex gap-2">
                <div className={`w-full bg-neutral-800 border border-neutral-700 rounded`}>
                    <div className="bg-neutral-700 p-3 pl-5">
                        <h1 className="w-full font-bold text-3xl mb-1">雑記</h1>
                        <div><Link href={"/"} className="underline underline-offset-2" >トップ</Link> &gt; 雑記</div>
                    </div>

                    <div className="mx-2 flex flex-col gap-3 p-3">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold">雑記</h2>
                            <div className="mx-3 flex flex-col gap-2">
                                <ul className="list-disc ml-5">
                                    {/* 雑記に記事を追加する場合はdata/notes/list.jsonにidをキー、タイトルを値として書き加えて、public/assets/notesにpdfファイルを追加してください */}
                                    <ListItem href={"/notes/RemoteControlWithSensor"} >スマートフォンのセンサを利用したパソコンの遠隔操作</ListItem>
                                    <ListItem href={"/notes/makeAGirlFriend"} >彼女作るンゴ</ListItem>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </>
    );
}
