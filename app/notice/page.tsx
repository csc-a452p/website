import { Metadata } from "next";
import NoticeItem from "../components/NoticeItem";
import DLink from "../components/DLink";
import { readFileSync } from "fs";
import { join } from "path";
import { DATA_PATH } from "../utils/dataConst";
import { Notice, noticeItem } from "@/types/notice";

export const metadata: Metadata = {
    title: 'お知らせ',
}

export default function Home() {
    const { notice } = JSON.parse(readFileSync(join(DATA_PATH, "notice.json"), "utf-8")) as Notice;
    notice.sort((a, b) => b.time - a.time);

    const newNotice: noticeItem[] = [], oldNotice: noticeItem[] = [];

    notice.forEach(e => {
        if (e.isNew)
            newNotice.push(e)
        else
            oldNotice.push(e)
    })

    return (
        <>
            <main className="w-full md:m-auto flex gap-2">
                <div className={`w-full bg-neutral-800 border border-neutral-700 rounded`}>
                    <div className="bg-neutral-700 p-3 pl-5">
                        <h1 className="w-full font-bold text-3xl mb-1">お知らせ</h1>
                        <div><DLink href={"/"}>トップ</DLink> &gt; お知らせ</div>
                    </div>

                    <div className="mx-2 flex flex-col gap-3 p-3">

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold">現在のお知らせ</h2>
                            <ul className="list-disc ml-8 flex flex-col gap-2">
                                {newNotice.map(e => <NoticeItem key={e.time} time={new Date(e.time)} author={e.author}>{e.content}</NoticeItem>)}
                            </ul>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold">過去のお知らせ</h2>
                            {
                                oldNotice.length
                                    ? <ul className="list-disc ml-8 flex flex-col gap-2">
                                        {oldNotice.map(e => <NoticeItem key={e.time} time={new Date(e.time)} author={e.author}>{e.content}</NoticeItem>)}
                                    </ul>
                                    : <>過去のお知らせはありません。</>
                            }
                        </div>

                    </div>
                </div>
            </main>
        </>
    );
}
