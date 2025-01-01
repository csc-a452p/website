import { Section } from "./components/Section";
import ListItem from "./components/ListItem";
import Link from "next/link";
import TwitterEmbed from "./components/TwitterEmbed";
import NoticeItem from "./components/NoticeItem";

export default function Home() {
    return (
        <>
            <main className="md:m-auto flex gap-2 flex-wrap flex-col md:flex-nowrap md:flex-row">
                <div className="flex-[3] items-stretch flex flex-col gap-2">
                    <Section title={"情報工学同好会とは？"}>
                        沼津高専の学生が、情報技術を用いていろいろやってます。<br />
                        同人誌「ンゴシリーズ」を制作しています。2024年末現在、高専とは一切関係ない団体です。

                        <div className="mt-3">
                            <TwitterEmbed />
                        </div>
                    </Section>

                    <Section title={"お知らせ"}>
                        <ul className="list-disc ml-8 my-3">
                            <NoticeItem time={new Date()} author={"nikachu2012"}>どっかでコミケ参加したいね</NoticeItem>
                        </ul>
                        <Link href={"/"} target="_blank" className="underline underline-offset-2">過去のお知らせ</Link>
                    </Section>
                </div>
                <div className="flex-[1] items-stretch">
                    <Section title={"メニュー"} className="h-full">
                        <ul className="list-disc ml-5">
                            <ListItem href={"notice"}>お知らせ</ListItem>
                            <ListItem href={"goods"}>刊行・制作物一覧</ListItem>
                            <ListItem href={""}>イベント参加歴</ListItem>
                            <ListItem href={""}>メンバー紹介</ListItem>
                            <ListItem href={""}>各種SNS</ListItem>
                            <ListItem href={""}>問い合わせ</ListItem>
                            <ListItem href={""}>API</ListItem>
                        </ul>
                    </Section>
                </div>
            </main>
        </>
    );
}
