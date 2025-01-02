import { Metadata } from "next";
import DLink from "../components/DLink";
import { listFiles } from "../utils/listFiles";
import { DATA_PATH } from "../utils/dataConst";
import { join } from "path";
import { readFileSync } from "fs";
import EventItem from "../components/EventItem";

export const metadata: Metadata = {
    title: 'イベント参加',
}

export default function Home() {
    const eventPathList = listFiles(join(DATA_PATH, "event"));
    const eventList = eventPathList.map(e => JSON.parse(readFileSync(e, "utf-8")) as eventType);

    eventList.sort((a, b) => Date.parse(b.start) - Date.parse(a.start));

    const willPart: eventType[] = []
    eventList.forEach(e => {
        if (e.willPart)
            willPart.push(e)
    })


    return (
        <>
            <main className="w-full md:m-auto flex gap-2">
                <div className={`w-full bg-neutral-800 border border-neutral-700 rounded`}>
                    <div className="bg-neutral-700 p-3 pl-5">
                        <h1 className="w-full font-bold text-3xl mb-1">イベント参加</h1>
                        <div><DLink href={"/"}>トップ</DLink> &gt; イベント参加</div>
                    </div>

                    <div className="mx-2 flex flex-col gap-3 p-3">

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold">参加予定のイベント</h2>
                            <div className="mx-3 flex flex-col gap-2">
                                {willPart.length <= 0
                                    ? "参加予定のイベントはありません"
                                    : willPart.map(e => <EventItem event={e} key={e.name.full} />)}
                            </div>

                        </div>

                        <hr className="border border-neutral-700" />

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold">過去に参加したイベント</h2>

                            <div className="mx-3 mb-3 flex flex-col gap-3">
                                {eventList.map(e => <EventItem event={e} key={e.name.full} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
