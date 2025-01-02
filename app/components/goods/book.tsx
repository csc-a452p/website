import Image from "next/image";
import DLink from "../DLink";
import { join } from "path";
import { existsSync } from "fs";

const DATA_DIR = "data"


export default function GoodsBook({ id, p }: { id: string, p: goodsBook }) {
    // get errata
    const isErrataExist = existsSync(join(process.cwd(), DATA_DIR, "errata", id + ".json"))

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
                            <Image src={p.thumbnail} width={300} height={500} alt={`${p.title}の表紙`} className="border border-neutral-700 object-contain" />
                        </div>

                        <div className="flex flex-col gap-3">
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
                                                <td>著者</td>
                                                <td>{p.author.show}</td>
                                            </tr>
                                            {
                                                p.code.type == "isdn" ? <tr>
                                                    <td>ISDN (Cコード)</td>
                                                    <td>{p.code.isdn} ({p.code.cCode})</td>
                                                </tr> : <></>
                                            }

                                            <tr>
                                                <td>サイズ</td>
                                                <td>{p.size}</td>
                                            </tr>
                                            <tr>
                                                <td>ページ数</td>
                                                <td>{p.pages}ページ (表紙込)</td>
                                            </tr>
                                            <tr>
                                                <td>販売価格</td>
                                                <td>{p.price} {p.priceUnit}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div className="mt-3">
                                        {
                                            p.onlineSaleUrl !== undefined
                                                ? <DLink href={p.onlineSaleUrl} target="_blank">電子版販売ページはこちら</DLink>
                                                : <></>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold">注記</h2>
                                <div className="mx-3 mt-2">
                                    {p.notes}
                                </div>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold">目次</h2>
                                <div className="mx-3 mt-2">
                                    <ul className="list-disc ml-6 flex flex-col gap-1">
                                        {
                                            p.tableOfContents.map(e => {
                                                return <li key={e}>{e}</li>
                                            })
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
                                                <th>版</th>
                                                <th>価格</th>
                                            </tr>
                                        </thead>
                                        <tbody className="[&_td]:border [&_td]:border-neutral-700 [&_td]:p-1 [&_td]:px-2">
                                            {
                                                p.salesHistory.map(e => {
                                                    return <tr key={e.event}>
                                                        <td>{e.event}</td>
                                                        <td>{e.start}{e.end ? ` - ${e.end}` : <></>}</td>
                                                        <td className="text-right">{e.revision}</td>
                                                        <td>{e.price} {e.priceUnit}</td>
                                                    </tr>
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold">改版履歴</h2>
                                <div className="mx-3 mt-2">
                                    <table className="border-collapse border border-neutral-700">
                                        <thead className="[&_th]:border [&_th]:border-neutral-700 [&_th]:p-1 [&_th]:px-2">
                                            <tr>
                                                <th>発行日</th>
                                                <th>版</th>
                                                <th>刷</th>
                                                <th>販売先</th>
                                            </tr>
                                        </thead>
                                        <tbody className="[&_td]:border [&_td]:border-neutral-700 [&_td]:p-1 [&_td]:px-2">
                                            {p.revisionHistory.map(e => {
                                                return <tr key={`${e.revision}-${e.print}`}>
                                                    <td>{e.releaseDate}</td>
                                                    <td className="text-right">{e.revision}</td>
                                                    <td className="text-right">{e.print}</td>
                                                    <td>{e.place}</td>
                                                </tr>
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold">正誤情報</h2>
                                <div className="mx-3 mt-2">
                                    {
                                        isErrataExist ? <DLink href={`/errata/${id}`}>正誤表はこちら</DLink> : "現在、見つかっている誤植はありません。"
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
