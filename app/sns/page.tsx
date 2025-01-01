import { Metadata } from "next";
import GoodsItem from "../components/GoodsItem";
import DLink from "../components/DLink";
import MemberItem from "../components/MemberItem";
import { TwitterTimeline } from "../components/TwitterEmbed";

export const metadata: Metadata = {
    title: 'イベント参加',
}

export default function Home() {
    return (
        <>
            <main className="w-full md:m-auto flex gap-2">
                <div className={`w-full bg-neutral-800 border border-neutral-700 rounded`}>
                    <div className="bg-neutral-700 p-3 pl-5">
                        <h1 className="w-full font-bold text-3xl mb-1">各種SNS</h1>
                        <div><DLink href={"/"}>トップ</DLink> &gt; 各種SNS</div>
                    </div>

                    <div className="mx-2 flex flex-col gap-3 p-3">
                        前はInstagramがあったみたいですが、今はTwitter(新X)しかありません。

                        <TwitterTimeline id={"csc_a452p"} />
                    </div>
                </div>
            </main>
        </>
    );
}
