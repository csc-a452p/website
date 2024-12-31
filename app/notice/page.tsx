import { Metadata } from "next";
import Link from "next/link";
import NoticeItem from "../components/NoticeItem";

export const metadata: Metadata = {
    title: 'お知らせ',
}

export default function Home() {
    return (
        <>
            <main className="w-full md:m-auto flex gap-2">
                <div className={`w-full bg-neutral-800 border border-neutral-700 rounded`}>
                    <div className="bg-neutral-700 p-3 pl-5">
                        <h1 className="w-full font-bold text-3xl mb-1">お知らせ</h1>
                        <div><Link href={"/"} className="underline underline-offset-2">トップ</Link> &gt; お知らせ</div>
                    </div>

                    <div className="ml-2 flex flex-col gap-3 p-3">

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold">現在のお知らせ</h2>
                            <ul className="list-disc ml-8 flex flex-col gap-2">
                                <NoticeItem time={new Date()} author={"nikachu2012"}>どっかでコミケ参加したいね</NoticeItem>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold">過去のお知らせ</h2>
                            過去のお知らせはありません。
                            {/* <ul className="list-disc ml-8">
                                <li>2024-12-31 どっかでコミケ参加したいね (by nikachu)</li>
                                <li>2024-12-31 どっかでコミケ参加したいね (by nikachu)</li>
                                <li>2024-12-31 どっかでコミケ参加したいね (by nikachu)</li>
                                <li>2024-12-31 どっかでコミケ参加したいね (by nikachu)</li>
                            </ul> */}
                        </div>

                    </div>
                </div>
            </main>
        </>
    );
}
