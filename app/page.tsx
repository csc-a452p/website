import { Section } from "./components/section";
import ListItem from "./components/ListItem";
import { TwitterFollowButton } from "./components/TwitterEmbed";
import NoticeItem from "./components/NoticeItem";
import { Metadata } from "next";
import DLink from "./components/DLink";
import { readFileSync } from "fs";
import { join } from "path";
import { DATA_PATH } from "./utils/dataConst";

export const metadata: Metadata = {
    title: "トップページ"
};


export default function Home() {
    const { notice } = JSON.parse(readFileSync(join(DATA_PATH, "notice.json"), "utf-8")) as Notice;
    notice.sort((a, b) => b.time - a.time);

    const newNotice: NoticeItem[] = [];

    notice.forEach(e => {
        if (e.isNew)
            newNotice.push(e)
    })

    return (
        <>
            <main className="md:m-auto flex gap-2 flex-wrap flex-col md:flex-nowrap md:flex-row">
                <div className="flex-[3] items-stretch flex flex-col gap-2">
                    <Section title={"情報工学同好会とは？"}>
                        沼津高専の学生が、情報技術を用いていろいろやってます。<br />
                        同人誌「ンゴシリーズ」を制作しています。2024年末現在、高専とは一切関係ない団体です。

                        <div className="mt-3">
                            <TwitterFollowButton id="csc_a452p" />
                        </div>
                    </Section>

                    <Section title={"お知らせ"}>
                        {newNotice.length
                            ? <ul className="list-disc ml-8 my-3">
                                {newNotice.map(e => <NoticeItem key={e.time} time={new Date(e.time)} author={e.author}>{e.content}</NoticeItem>)}
                            </ul>
                            : <div>現在、お知らせはありません。</div>}

                        <div className="mt-2">
                            <DLink href={"/"} target="_blank">過去のお知らせ</DLink>
                        </div>
                    </Section>
                </div>
                <div className="flex-[1] items-stretch">
                    <Section title={"メニュー"} className="h-full">
                        <ul className="list-disc ml-5">
                            <ListItem href={"notice"}>お知らせ</ListItem>
                            <ListItem href={"goods"}>販売品一覧</ListItem>
                            <ListItem href={"works"}>制作物一覧</ListItem>
                            <ListItem href={"errata"}>正誤情報</ListItem>
                            <ListItem href={"notes"}>雑記</ListItem>
                            <ListItem href={"event"}>イベント参加歴</ListItem>
                            <ListItem href={"member"}>メンバー紹介</ListItem>
                            <ListItem href={"sns"}>各種SNS</ListItem>
                            <ListItem href={"contact"}>問い合わせ</ListItem>
                            <ListItem href={"api"}>API</ListItem>
                        </ul>
                    </Section>
                </div>
            </main>
        </>
    );
}
