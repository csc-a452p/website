import { Metadata } from "next";
import GoodsItem from "../components/GoodsItem";
import DLink from "../components/DLink";

export const metadata: Metadata = {
    title: 'イベント参加',
}

export default function Home() {
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
                                参加予定のイベントはありません
                            </div>

                        </div>

                        <hr className="border border-neutral-700"/>

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold">過去に参加したイベント</h2>

                            <div className="mx-3 flex flex-col gap-5">

                                <div className="text-wrap">
                                    <div className="font-bold text-lg">沼津高専 第59回高専祭</div>
                                    <div className="mt-1">
                                        2024-11-09 - 2024-11-10 / 講義棟1F M3教室(内線番号2603)
                                    </div>

                                    <div className="mt-1">
                                        <table className="border-collapse border border-neutral-700">
                                            <thead className="[&_th]:border [&_th]:border-neutral-700 [&_th]:p-1 [&_th]:px-2">
                                                <tr>
                                                    <th>種別</th>
                                                    <th>商品名(値段)</th>
                                                </tr>
                                            </thead>
                                            <tbody className="[&_td]:border [&_td]:border-neutral-700 [&_td]:p-1 [&_td]:px-2">
                                                <tr>
                                                    <td>新刊</td>
                                                    <td>ンゴシリーズ vol.1(500 JPY)</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
