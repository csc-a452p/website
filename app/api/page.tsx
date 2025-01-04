import { Metadata } from "next";
import Link from "next/link";
import DLink from "../components/DLink";

export const metadata: Metadata = {
    title: 'API',
}

export default function Home() {

    return (
        <>
            <main className="w-full md:m-auto flex gap-2">
                <div className={`w-full bg-neutral-800 border border-neutral-700 rounded`}>
                    <div className="bg-neutral-700 p-3 pl-5">
                        <h1 className="w-full font-bold text-3xl mb-1">API</h1>
                        <div><Link href={"/"} className="underline underline-offset-2" >トップ</Link> &gt; API</div>
                    </div>

                    <div className="mx-2 flex flex-col gap-3 p-3">
                        APIといってもほとんど静的ファイルを返してるだけです

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold"><code>目次(API)</code></h2>
                            <div className="mx-3 flex flex-col gap-2">
                                <ul className="list-disc ml-5">
                                    <li><DLink href="#GET /data/errata.json"><code>GET /data/errata.json</code></DLink></li>
                                    <li><DLink href="#GET /data/errata/{errataID}.json"><code>{`GET /data/errata/{errataID}.json`}</code></DLink></li>
                                    <li><DLink href="#GET /data/event.json"><code>GET /data/event.json</code></DLink></li>
                                    <li><DLink href="#GET /data/event/{eventID}.json"><code>{`GET /data/event/{eventID}.json`}</code></DLink></li>
                                    <li><DLink href="#GET /data/goods.json"><code>GET /data/goods.json</code></DLink></li>
                                    <li><DLink href="#GET /data/goods/{goodsID}.json"><code>{`GET /data/goods/{goodsID}.json`}</code></DLink></li>
                                    <li><DLink href="#GET /data/goods_newly.json"><code>{`GET /data/goods_newly.json`}</code></DLink></li>
                                    <li><DLink href="#GET /data/notes/list.json"><code>{`GET /data/notes/list.json`}</code></DLink></li>
                                </ul>
                            </div>

                            <h2 className="text-xl font-bold"><code>目次(型)</code></h2>
                            <div className="mx-3 flex flex-col gap-2">
                                <ul className="list-disc ml-5">
                                    <li><DLink href="#type_ErrataItem"><code>ErrataItem</code></DLink></li>
                                    <li><DLink href="#type_eventSellItem"><code>eventSellItem</code></DLink></li>
                                    <li><DLink href="#type_bookCodeISDN"><code>bookCodeISDN</code></DLink></li>
                                    <li><DLink href="#type_salesHistoryItem"><code>salesHistoryItem</code></DLink></li>
                                    <li><DLink href="#type_revisionHistoryItem"><code>revisionHistoryItem</code></DLink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold" id="GET /data/errata.json"><code>GET /data/errata.json</code></h2>
                            <div className="mx-3 flex flex-col gap-2">
                                正誤情報のある販売品のリストを返します。

                                <div className="border border-neutral-700 p-2 flex flex-col gap-2">
                                    <div className="font-bold text-sm">JSON Response</div>
                                    <table className="border-collapse border border-neutral-700">
                                        <thead className="[&_th]:border [&_th]:border-neutral-700 [&_th]:p-1 [&_th]:px-2">
                                            <tr>
                                                <th>key</th>
                                                <th>type</th>
                                                <th>description</th>
                                            </tr>
                                        </thead>
                                        <tbody className="[&_td]:border [&_td]:border-neutral-700 [&_td]:p-1 [&_td]:px-2">
                                            <tr>
                                                <td><code>errata</code></td>
                                                <td><code>string[]</code></td>
                                                <td>errataIDの配列</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div>
                                        <DLink href="/data/errata.json" target="_blank">サンプル</DLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold" id={`GET /data/errata/{errataID}.json`}><code>{`GET /data/errata/{errataID}.json`}</code></h2>
                            <div className="mx-3 flex flex-col gap-2">
                                指定idの正誤情報を返します。正誤情報が存在する場合、IDは販売品につくIDと同じになります。

                                <div className="border border-neutral-700 p-2 flex flex-col gap-2">
                                    <div className="font-bold text-sm">JSON Response</div>
                                    <table className="border-collapse border border-neutral-700">
                                        <thead className="[&_th]:border [&_th]:border-neutral-700 [&_th]:p-1 [&_th]:px-2">
                                            <tr>
                                                <th>key</th>
                                                <th>type</th>
                                                <th>description</th>
                                            </tr>
                                        </thead>
                                        <tbody className="[&_td]:border [&_td]:border-neutral-700 [&_td]:p-1 [&_td]:px-2">
                                            <tr>
                                                <td><code>[key: string]</code></td>
                                                <td><code>ErrataItem[]</code></td>
                                                <td>版ごとの正誤情報</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div>
                                        <DLink href="/data/errata/ngo_vol1.json" target="_blank">サンプル</DLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold" id="GET /data/event.json"><code>GET /data/event.json</code></h2>
                            <div className="mx-3 flex flex-col gap-2">
                                参加予定 / 参加済みのイベントのリストを取得します

                                <div className="border border-neutral-700 p-2 flex flex-col gap-2">
                                    <div className="font-bold text-sm">JSON Response</div>
                                    <table className="border-collapse border border-neutral-700">
                                        <thead className="[&_th]:border [&_th]:border-neutral-700 [&_th]:p-1 [&_th]:px-2">
                                            <tr>
                                                <th>key</th>
                                                <th>type</th>
                                                <th>description</th>
                                            </tr>
                                        </thead>
                                        <tbody className="[&_td]:border [&_td]:border-neutral-700 [&_td]:p-1 [&_td]:px-2">
                                            <tr>
                                                <td><code>event</code></td>
                                                <td><code>string[]</code></td>
                                                <td>eventIDの配列</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div>
                                        <DLink href="/data/event.json" target="_blank">サンプル</DLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold" id={`GET /data/event/{eventID}.json`}><code>{`GET /data/event/{eventID}.json`}</code></h2>
                            <div className="mx-3 flex flex-col gap-2">
                                指定IDのイベント情報を返します。

                                <div className="border border-neutral-700 p-2 flex flex-col gap-2">
                                    <div className="font-bold text-sm">JSON Response</div>
                                    <table className="border-collapse border border-neutral-700">
                                        <thead className="[&_th]:border [&_th]:border-neutral-700 [&_th]:p-1 [&_th]:px-2">
                                            <tr>
                                                <th>key</th>
                                                <th>type</th>
                                                <th>description</th>
                                            </tr>
                                        </thead>
                                        <tbody className="[&_td]:border [&_td]:border-neutral-700 [&_td]:p-1 [&_td]:px-2">
                                            <tr>
                                                <td><code>name.full</code></td>
                                                <td><code>string</code></td>
                                                <td>イベントの正式名称</td>
                                            </tr>
                                            <tr>
                                                <td><code>name.name</code></td>
                                                <td><code>string</code></td>
                                                <td>イベント名</td>
                                            </tr>
                                            <tr>
                                                <td><code>name.count</code></td>
                                                <td><code>string</code></td>
                                                <td>イベントの回数</td>
                                            </tr>

                                            <tr>
                                                <td><code>start</code></td>
                                                <td><code>string</code></td>
                                                <td>開始日(<code>YYYY-MM-DD</code>)</td>
                                            </tr>
                                            <tr>
                                                <td><code>end</code></td>
                                                <td><code>string | undefined</code></td>
                                                <td>開始日(<code>YYYY-MM-DD</code>)</td>
                                            </tr>
                                            <tr>
                                                <td><code>place</code></td>
                                                <td><code>string</code></td>
                                                <td>出店場所</td>
                                            </tr>
                                            <tr>
                                                <td><code>sell</code></td>
                                                <td><code>eventSellItem[]</code></td>
                                                <td>販売品の配列</td>
                                            </tr>

                                            <tr>
                                                <td><code>additionalLinks</code></td>
                                                <td><code>[key: string]: string</code></td>
                                                <td>関連リンクの辞書</td>
                                            </tr>

                                            <tr>
                                                <td><code>willPart</code></td>
                                                <td><code>boolean</code></td>
                                                <td>参加予定かどうか</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div>
                                        <DLink href="/data/event/nitncfes_59.json" target="_blank">サンプル</DLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold" id="GET /data/goods.json"><code>GET /data/goods.json</code></h2>
                            <div className="mx-3 flex flex-col gap-2">
                                販売品のデータを取得します。販売品の詳細ページと同等のデータです。

                                <div className="border border-neutral-700 p-2 flex flex-col gap-2">
                                    <div className="font-bold text-sm">JSON Response</div>
                                    <table className="border-collapse border border-neutral-700">
                                        <thead className="[&_th]:border [&_th]:border-neutral-700 [&_th]:p-1 [&_th]:px-2">
                                            <tr>
                                                <th>key</th>
                                                <th>type</th>
                                                <th>description</th>
                                            </tr>
                                        </thead>
                                        <tbody className="[&_td]:border [&_td]:border-neutral-700 [&_td]:p-1 [&_td]:px-2">
                                            <tr>
                                                <td><code>goods</code></td>
                                                <td><code>string[]</code></td>
                                                <td>goodsIDの配列</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div>
                                        <DLink href="/data/goods.json" target="_blank">サンプル</DLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold" id={`GET /data/goods/{goodsID}.json`}><code>{`GET /data/goods/{goodsID}.json`}</code></h2>
                            <div className="mx-3 flex flex-col gap-2">
                                指定IDの販売品情報を返します。

                                <div className="border border-neutral-700 p-2 flex flex-col gap-2">
                                    <div className="font-bold text-sm">JSON Response (type=&quot;book&quot;の場合)</div>
                                    <table className="border-collapse border border-neutral-700">
                                        <thead className="[&_th]:border [&_th]:border-neutral-700 [&_th]:p-1 [&_th]:px-2">
                                            <tr>
                                                <th>key</th>
                                                <th>type</th>
                                                <th>description</th>
                                            </tr>
                                        </thead>
                                        <tbody className="[&_td]:border [&_td]:border-neutral-700 [&_td]:p-1 [&_td]:px-2">
                                            <tr>
                                                <td><code>type</code></td>
                                                <td><code>&quot;book&quot;</code></td>
                                                <td>タイプ(定数)</td>
                                            </tr>

                                            <tr>
                                                <td><code>title</code></td>
                                                <td><code>string</code></td>
                                                <td>タイトル</td>
                                            </tr>
                                            <tr>
                                                <td><code>series</code></td>
                                                <td><code>string</code></td>
                                                <td>シリーズ名(シリーズでない場合はタイトルと同じ)</td>
                                            </tr>
                                            <tr>
                                                <td><code>vol</code></td>
                                                <td><code>numbers</code></td>
                                                <td>号数(単発の場合は1)</td>
                                            </tr>

                                            <tr>
                                                <td><code>releaseDate</code></td>
                                                <td><code>string</code></td>
                                                <td>初刊発行日(<code>&quot;YYYY-MM-DD&quot;</code>)</td>
                                            </tr>
                                            <tr>
                                                <td><code>description</code></td>
                                                <td><code>string</code></td>
                                                <td>紹介文</td>
                                            </tr>
                                            <tr>
                                                <td><code>thumbnail</code></td>
                                                <td><code>string</code></td>
                                                <td>サムネイル画像のBASE_URLからのアドレス</td>
                                            </tr>
                                            <tr>
                                                <td><code>code</code></td>
                                                <td><code>bookCodeISDN</code></td>
                                                <td>書籍についたコード(ISDNなど)</td>
                                            </tr>
                                            <tr>
                                                <td><code>pages</code></td>
                                                <td><code>number</code></td>
                                                <td>表紙込みのページ数</td>
                                            </tr>

                                            <tr>
                                                <td><code>author.show</code></td>
                                                <td><code>string</code></td>
                                                <td>著者</td>
                                            </tr>
                                            <tr>
                                                <td><code>author.detail</code></td>
                                                <td><code>string[]</code></td>
                                                <td>著者の詳細(著者全員の配列)</td>
                                            </tr>

                                            <tr>
                                                <td><code>tableOfContents</code></td>
                                                <td><code>string[]</code></td>
                                                <td>目次</td>
                                            </tr>
                                            <tr>
                                                <td><code>genre</code></td>
                                                <td><code>string[]</code></td>
                                                <td>ジャンル</td>
                                            </tr>
                                            <tr>
                                                <td><code>lang</code></td>
                                                <td><code>string</code></td>
                                                <td>書籍内の言語(ISO 639-1に準拠)</td>
                                            </tr>
                                            <tr>
                                                <td><code>tags</code></td>
                                                <td><code>string[]</code></td>
                                                <td>タグ</td>
                                            </tr>
                                            <tr>
                                                <td><code>isR18</code></td>
                                                <td><code>boolean</code></td>
                                                <td>えっちかどうか</td>
                                            </tr>

                                            <tr>
                                                <td><code>price</code></td>
                                                <td><code>number</code></td>
                                                <td>価格</td>
                                            </tr>
                                            <tr>
                                                <td><code>priceUnit</code></td>
                                                <td><code>string</code></td>
                                                <td>価格の単位(ISO 4217に準拠)</td>
                                            </tr>

                                            <tr>
                                                <td><code>size</code></td>
                                                <td><code>string</code></td>
                                                <td>
                                                    本のサイズ(ISO 216およびJIS P 0138に準拠)<br />
                                                    JIS B列を使用する場合は <code>JIS Bn</code> と表記
                                                </td>
                                            </tr>

                                            <tr>
                                                <td><code>notes</code></td>
                                                <td><code>string</code></td>
                                                <td>注記</td>
                                            </tr>

                                            <tr>
                                                <td><code>onlineSaleUrl</code></td>
                                                <td><code>string | undefined</code></td>
                                                <td>オンライン販売のURL</td>
                                            </tr>

                                            <tr>
                                                <td><code>salesHistory</code></td>
                                                <td><code>salesHistoryItem[]</code></td>
                                                <td>販売履歴</td>
                                            </tr>

                                            <tr>
                                                <td><code>revisionHistory</code></td>
                                                <td><code>revisionHistoryItem[]</code></td>
                                                <td>改版履歴</td>
                                            </tr>

                                            <tr>
                                                <td><code>additionalFields</code></td>
                                                <td><code>[key: string]: string</code></td>
                                                <td>関連情報</td>
                                            </tr>

                                            <tr>
                                                <td><code>additionalLinks</code></td>
                                                <td><code>[key: string]: string</code></td>
                                                <td>関連リンク</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div>
                                        <DLink href="/data/goods/ngo_vol1.json" target="_blank">サンプル</DLink>
                                    </div>
                                </div>

                                <div className="border border-neutral-700 p-2 flex flex-col gap-2">
                                    <div className="font-bold text-sm">JSON Response (type=&quot;item&quot;の場合)</div>
                                    <table className="border-collapse border border-neutral-700">
                                        <thead className="[&_th]:border [&_th]:border-neutral-700 [&_th]:p-1 [&_th]:px-2">
                                            <tr>
                                                <th>key</th>
                                                <th>type</th>
                                                <th>description</th>
                                            </tr>
                                        </thead>
                                        <tbody className="[&_td]:border [&_td]:border-neutral-700 [&_td]:p-1 [&_td]:px-2">
                                            <tr>
                                                <td><code>type</code></td>
                                                <td><code>&quot;item&quot;</code></td>
                                                <td>タイプ(定数)</td>
                                            </tr>

                                            <tr>
                                                <td><code>title</code></td>
                                                <td><code>string</code></td>
                                                <td>タイトル</td>
                                            </tr>

                                            <tr>
                                                <td><code>releaseDate</code></td>
                                                <td><code>string</code></td>
                                                <td>初刊発行日(<code>&quot;YYYY-MM-DD&quot;</code>)</td>
                                            </tr>
                                            <tr>
                                                <td><code>description</code></td>
                                                <td><code>string</code></td>
                                                <td>紹介文</td>
                                            </tr>
                                            <tr>
                                                <td><code>thumbnail</code></td>
                                                <td><code>string</code></td>
                                                <td>サムネイル画像のBASE_URLからのアドレス</td>
                                            </tr>

                                            <tr>
                                                <td><code>author.show</code></td>
                                                <td><code>string</code></td>
                                                <td>著者</td>
                                            </tr>
                                            <tr>
                                                <td><code>author.detail</code></td>
                                                <td><code>string[]</code></td>
                                                <td>著者の詳細(著者全員の配列)</td>
                                            </tr>

                                            <tr>
                                                <td><code>genre</code></td>
                                                <td><code>string[]</code></td>
                                                <td>ジャンル</td>
                                            </tr>

                                            <tr>
                                                <td><code>tags</code></td>
                                                <td><code>string[]</code></td>
                                                <td>タグ</td>
                                            </tr>

                                            <tr>
                                                <td><code>isR18</code></td>
                                                <td><code>boolean</code></td>
                                                <td>えっちかどうか</td>
                                            </tr>

                                            <tr>
                                                <td><code>price</code></td>
                                                <td><code>number</code></td>
                                                <td>価格</td>
                                            </tr>
                                            <tr>
                                                <td><code>priceUnit</code></td>
                                                <td><code>string</code></td>
                                                <td>価格の単位(ISO 4217に準拠)</td>
                                            </tr>

                                            <tr>
                                                <td><code>notes</code></td>
                                                <td><code>string</code></td>
                                                <td>注記</td>
                                            </tr>

                                            <tr>
                                                <td><code>onlineSaleUrl</code></td>
                                                <td><code>string | undefined</code></td>
                                                <td>オンライン販売のURL</td>
                                            </tr>

                                            <tr>
                                                <td><code>salesHistory</code></td>
                                                <td><code>salesHistoryItem[]</code></td>
                                                <td>販売履歴</td>
                                            </tr>

                                            <tr>
                                                <td><code>additionalFields</code></td>
                                                <td><code>[key: string]: string</code></td>
                                                <td>関連情報</td>
                                            </tr>

                                            <tr>
                                                <td><code>additionalLinks</code></td>
                                                <td><code>[key: string]: string</code></td>
                                                <td>関連リンク</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div>
                                        <DLink href="/data/goods/td4cpu.json" target="_blank">サンプル</DLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold" id="GET /data/goods_newly.json"><code>GET /data/goods_newly.json</code></h2>
                            <div className="mx-3 flex flex-col gap-2">
                                新刊である販売品のリストを返します

                                <div className="border border-neutral-700 p-2 flex flex-col gap-2">
                                    <div className="font-bold text-sm">JSON Response</div>
                                    <table className="border-collapse border border-neutral-700">
                                        <thead className="[&_th]:border [&_th]:border-neutral-700 [&_th]:p-1 [&_th]:px-2">
                                            <tr>
                                                <th>key</th>
                                                <th>type</th>
                                                <th>description</th>
                                            </tr>
                                        </thead>
                                        <tbody className="[&_td]:border [&_td]:border-neutral-700 [&_td]:p-1 [&_td]:px-2">
                                            <tr>
                                                <td><code>newly</code></td>
                                                <td><code>string[]</code></td>
                                                <td>新刊のgoodsID</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div>
                                        <DLink href="/data/goods_newly.json" target="_blank">サンプル</DLink>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold" id="GET /data/notes/list.json"><code>GET /data/notes/list.json</code></h2>
                            <div className="mx-3 flex flex-col gap-2">
                                <div>
                                    雑記のリストを返します。雑記のファイルは <code>{`/assets/notes/{notesID}.pdf`}</code> にあります
                                </div>

                                <div className="border border-neutral-700 p-2 flex flex-col gap-2">
                                    <div className="font-bold text-sm">JSON Response</div>
                                    <table className="border-collapse border border-neutral-700">
                                        <thead className="[&_th]:border [&_th]:border-neutral-700 [&_th]:p-1 [&_th]:px-2">
                                            <tr>
                                                <th>key</th>
                                                <th>type</th>
                                                <th>description</th>
                                            </tr>
                                        </thead>
                                        <tbody className="[&_td]:border [&_td]:border-neutral-700 [&_td]:p-1 [&_td]:px-2">
                                            <tr>
                                                <td><code>[notesID: string]</code></td>
                                                <td><code>string</code></td>
                                                <td>雑記のIDとタイトルのリスト</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div>
                                        <DLink href="/data/notes/list.json" target="_blank">サンプル</DLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="border border-neutral-700 mt-2" />

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold" id="type_ErrataItem"><code>ErrataItem</code></h2>
                            <div className="mx-3 flex flex-col gap-2">
                                正誤情報の各データです。画像か文字列どちらかは必ず存在しますが、画像がある場合は画像を優先してください。

                                <div className="border border-neutral-700 p-2 flex flex-col gap-2">
                                    <div className="font-bold text-sm">Object Type</div>
                                    <table className="border-collapse border border-neutral-700">
                                        <thead className="[&_th]:border [&_th]:border-neutral-700 [&_th]:p-1 [&_th]:px-2">
                                            <tr>
                                                <th>key</th>
                                                <th>type</th>
                                                <th>description</th>
                                            </tr>
                                        </thead>
                                        <tbody className="[&_td]:border [&_td]:border-neutral-700 [&_td]:p-1 [&_td]:px-2">
                                            <tr>
                                                <td><code>at</code></td>
                                                <td><code>string</code></td>
                                                <td>正誤の場所</td>
                                            </tr>
                                            <tr>
                                                <td><code>wrong</code></td>
                                                <td><code>string | undefined</code></td>
                                                <td>訂正前の文字列</td>
                                            </tr>
                                            <tr>
                                                <td><code>correct</code></td>
                                                <td><code>string | undefined</code></td>
                                                <td>訂正後の文字列</td>
                                            </tr>
                                            <tr>
                                                <td><code>wrongImg</code></td>
                                                <td><code>string | undefined</code></td>
                                                <td>訂正前の画像へのURL</td>
                                            </tr>
                                            <tr>
                                                <td><code>correctImg</code></td>
                                                <td><code>string | undefined</code></td>
                                                <td>訂正後の画像へのURL</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold" id="type_eventSellItem"><code>eventSellItem</code></h2>
                            <div className="mx-3 flex flex-col gap-2">
                                イベントで販売した販売品の各データです。

                                <div className="border border-neutral-700 p-2 flex flex-col gap-2">
                                    <div className="font-bold text-sm">Object Type</div>
                                    <table className="border-collapse border border-neutral-700">
                                        <thead className="[&_th]:border [&_th]:border-neutral-700 [&_th]:p-1 [&_th]:px-2">
                                            <tr>
                                                <th>key</th>
                                                <th>type</th>
                                                <th>description</th>
                                            </tr>
                                        </thead>
                                        <tbody className="[&_td]:border [&_td]:border-neutral-700 [&_td]:p-1 [&_td]:px-2">
                                            <tr>
                                                <td><code>isNewly</code></td>
                                                <td><code>boolean</code></td>
                                                <td>新刊かどうか</td>
                                            </tr>
                                            <tr>
                                                <td><code>name</code></td>
                                                <td><code>string</code></td>
                                                <td>商品名</td>
                                            </tr>
                                            <tr>
                                                <td><code>id</code></td>
                                                <td><code>string</code></td>
                                                <td>goodsID</td>
                                            </tr>
                                            <tr>
                                                <td><code>price</code></td>
                                                <td><code>number</code></td>
                                                <td>価格</td>
                                            </tr>
                                            <tr>
                                                <td><code>priceUnit</code></td>
                                                <td><code>string</code></td>
                                                <td>価格の単位(ISO 4217に準拠)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold" id="type_bookCodeISDN"><code>bookCodeISDN</code></h2>
                            <div className="mx-3 flex flex-col gap-2">
                                書籍のISDNコードです。

                                <div className="border border-neutral-700 p-2 flex flex-col gap-2">
                                    <div className="font-bold text-sm">Object Type</div>
                                    <table className="border-collapse border border-neutral-700">
                                        <thead className="[&_th]:border [&_th]:border-neutral-700 [&_th]:p-1 [&_th]:px-2">
                                            <tr>
                                                <th>key</th>
                                                <th>type</th>
                                                <th>description</th>
                                            </tr>
                                        </thead>
                                        <tbody className="[&_td]:border [&_td]:border-neutral-700 [&_td]:p-1 [&_td]:px-2">
                                            <tr>
                                                <td><code>type</code></td>
                                                <td><code>&quot;isdn&quot;</code></td>
                                                <td>定数</td>
                                            </tr>
                                            <tr>
                                                <td><code>isdn</code></td>
                                                <td><code>string</code></td>
                                                <td>ISDNコード(<code>{`"ISDNnnn-n-nnnnnn-nn-n"`}</code>)</td>
                                            </tr>
                                            <tr>
                                                <td><code>cCode</code></td>
                                                <td><code>string</code></td>
                                                <td>Cコード (<code>{`"Cnnnn"`}</code>)</td>
                                            </tr>
                                            <tr>
                                                <td><code>url</code></td>
                                                <td><code>string</code></td>
                                                <td>ISDN 登録情報へのURL</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold" id="type_salesHistoryItem"><code>salesHistoryItem</code></h2>
                            <div className="mx-3 flex flex-col gap-2">
                                販売履歴の各データです。

                                <div className="border border-neutral-700 p-2 flex flex-col gap-2">
                                    <div className="font-bold text-sm">Object Type</div>
                                    <table className="border-collapse border border-neutral-700">
                                        <thead className="[&_th]:border [&_th]:border-neutral-700 [&_th]:p-1 [&_th]:px-2">
                                            <tr>
                                                <th>key</th>
                                                <th>type</th>
                                                <th>description</th>
                                            </tr>
                                        </thead>
                                        <tbody className="[&_td]:border [&_td]:border-neutral-700 [&_td]:p-1 [&_td]:px-2">
                                            <tr>
                                                <td><code>event</code></td>
                                                <td><code>string</code></td>
                                                <td>イベント名</td>
                                            </tr>
                                            <tr>
                                                <td><code>start</code></td>
                                                <td><code>string</code></td>
                                                <td>イベントの開始日(<code>&quot;YYYY-MM-DD&quot;</code>)</td>
                                            </tr>
                                            <tr>
                                                <td><code>end</code></td>
                                                <td><code>string | undefined</code></td>
                                                <td>イベントの終了日(<code>&quot;YYYY-MM-DD&quot;</code>)</td>
                                            </tr>
                                            <tr>
                                                <td><code>revision</code></td>
                                                <td><code>number</code></td>
                                                <td>販売した版</td>
                                            </tr>
                                            <tr>
                                                <td><code>price</code></td>
                                                <td><code>number</code></td>
                                                <td>価格</td>
                                            </tr>
                                            <tr>
                                                <td><code>priceUnit</code></td>
                                                <td><code>string</code></td>
                                                <td>価格の単位(ISO 4217に準拠)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold" id="type_revisionHistoryItem"><code>revisionHistoryItem</code></h2>
                            <div className="mx-3 flex flex-col gap-2">
                                改版履歴の各データです。

                                <div className="border border-neutral-700 p-2 flex flex-col gap-2">
                                    <div className="font-bold text-sm">Object Type</div>
                                    <table className="border-collapse border border-neutral-700">
                                        <thead className="[&_th]:border [&_th]:border-neutral-700 [&_th]:p-1 [&_th]:px-2">
                                            <tr>
                                                <th>key</th>
                                                <th>type</th>
                                                <th>description</th>
                                            </tr>
                                        </thead>
                                        <tbody className="[&_td]:border [&_td]:border-neutral-700 [&_td]:p-1 [&_td]:px-2">
                                            <tr>
                                                <td><code>revision</code></td>
                                                <td><code>number</code></td>
                                                <td>版</td>
                                            </tr>
                                            <tr>
                                                <td><code>print</code></td>
                                                <td><code>number</code></td>
                                                <td>刷</td>
                                            </tr>
                                            <tr>
                                                <td><code>end</code></td>
                                                <td><code>string | undefined</code></td>
                                                <td>発行日(<code>&quot;YYYY-MM-DD&quot;</code>)</td>
                                            </tr>
                                            <tr>
                                                <td><code>place</code></td>
                                                <td><code>string</code></td>
                                                <td>販売場所</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </main>
        </>
    );
}
