import DLink from "../DLink";
import { join } from "path";
import { existsSync } from "fs";
import { DATA_PATH } from "@/app/utils/dataConst";
import ImagePopup from "../ImagePopup";
import { goodsItem } from "@/types/goods";

export default function GoodsItem({ id, p }: { id: string, p: goodsItem }) {
    // get errata
    const isErrataExist = existsSync(join(DATA_PATH, "errata", id + ".json"))

    return (
        <>
            <main className="w-full md:m-auto flex gap-2">
                <div className={`w-full bg-neutral-800 border border-neutral-700 rounded`}>
                    <div className="bg-neutral-700 p-3 pl-5">
                        <h1 className="w-full font-bold text-3xl mb-1">{p.title}</h1>
                        <div><DLink href="/">トップ</DLink> &gt; <DLink href={"/goods"}>販売品一覧</DLink> &gt; {p.title}</div>
                    </div>

                    <div className="mx-2 flex flex-col gap-2 p-3">
                        <div className="flex justify-center">
                            <ImagePopup src={p.thumbnail} width={300} height={500} alt={`${p.title}の表紙`} className="border border-neutral-700 object-contain" />
                        </div>

                        <div className="flex flex-col gap-5">
                            <div>
                                <h2 className="text-xl font-bold">基本情報</h2>
                                <div className="mx-3 mt-2">
                                    {p.description}
                                </div>
                                <div className="mx-3 mt-2">
                                    <table className="border-collapse border border-neutral-700">
                                        <tbody className="[&_td]:border [&_td]:border-neutral-700 [&_td]:p-1 [&_td]:px-2">
                                            <tr>
                                                <td>名称</td>
                                                <td>{p.title}</td>
                                            </tr>
                                            <tr>
                                                <td>制作者</td>
                                                <td>{p.author.show}</td>
                                            </tr>
                                            <tr>
                                                <td>販売価格</td>
                                                <td>{p.price.toLocaleString()} {p.priceUnit}</td>
                                            </tr>
                                            <tr>
                                                <td>販売開始日</td>
                                                <td>{p.releaseDate}</td>
                                            </tr>
                                            {
                                                p.additionalFields !== undefined ? Object.keys(p.additionalFields).map(e => (
                                                    <tr key={e}>
                                                        <td>{e}</td>
                                                        <td>{p.additionalFields?.[e] || "undefined"}</td>
                                                    </tr>
                                                )) : <></>
                                            }
                                        </tbody>
                                    </table>

                                    {
                                        p.onlineSaleUrl !== undefined
                                            ? <div className="mt-3">
                                                <DLink href={p.onlineSaleUrl} target="_blank">オンライン販売ページはこちら</DLink>
                                            </div>
                                            : <></>
                                    }

                                </div>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold">注記</h2>
                                <div className="mx-3 mt-2">
                                    {p.notes}
                                </div>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold">関連リンク</h2>
                                <div className="mx-3 mt-2">
                                    <ul className="list-disc ml-6 flex flex-col gap-1">
                                        {
                                            p.additionalLinks !== undefined ? Object.keys(p.additionalLinks).map(e => (
                                                <li key={e}><DLink href={p.additionalLinks?.[e] || "undefined"} target="_blank">{e}</DLink></li>
                                            )) : <></>
                                        }
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold">販売履歴</h2>
                                <div className="mx-3 mt-2">
                                    <table className="border-collapse border border-neutral-700">
                                        <thead className="[&_th]:border [&_th]:border-neutral-700 [&_th]:p-1 [&_th]:px-2">
                                            <tr>
                                                <th>イベント名</th>
                                                <th>開催期間</th>
                                                <th>価格</th>
                                            </tr>
                                        </thead>
                                        <tbody className="[&_td]:border [&_td]:border-neutral-700 [&_td]:p-1 [&_td]:px-2">
                                            {
                                                p.salesHistory.map(e => {
                                                    return <tr key={e.event}>
                                                        <td>{e.event}</td>
                                                        <td>{e.start}{e.end ? ` - ${e.end}` : <></>}</td>
                                                        <td>{e.price} {e.priceUnit}</td>
                                                    </tr>
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold">既知の問題</h2>
                                <div className="mx-3 mt-2">
                                    {
                                        isErrataExist ? <DLink href={`/errata/${id}`}>問題の一覧はこちら</DLink> : "現在、見つかっている問題はありません。"
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
