import { Metadata } from "next";
import Link from "next/link";
import WorkItem from "../components/WorkItem";

export const metadata: Metadata = {
    title: '制作物',
}

export default function Home() {
    return (
        <>
            <main className="w-full md:m-auto flex gap-2">
                <div className={`w-full bg-neutral-800 border border-neutral-700 rounded`}>
                    <div className="bg-neutral-700 p-3 pl-5">
                        <h1 className="w-full font-bold text-3xl mb-1">制作物一覧</h1>
                        <div><Link href={"/"} className="underline underline-offset-2">トップ</Link> &gt; 制作物一覧</div>
                    </div>

                    <div className="mx-2 flex flex-col gap-3 p-3">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold">制作物一覧</h2>
                            <div className="mx-3 flex flex-col gap-2">
                                <WorkItem
                                    thumbnail="/assets/works/nitncwebdoc/thumbnail.png"
                                    link="https://nitnc-handbook.vercel.app/"
                                    external={true}
                                    title="沼津高専学生便覧HTML版"
                                    description="R5年度の学生便覧の一部をHTMLに書き起こしました。この取り組みは学校公式のものになる可能性があります。"
                                />
                                <WorkItem
                                    thumbnail="/assets/works/bveTrainsimByToukaitetudou/bettersignal.png"
                                    link="https://toukaitetudou.hatenablog.com/entry/BVE/"
                                    external={true}
                                    title="Bveプラグイン類"
                                    description="Toukaitetudouがこれまで個人的に作成してきたBveプラグイン類の一部を公開しています。尚、作成当時のまま最新の情報に更新されていないものもございます。予めご了承ください。"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </>
    );
}
