import Image from "next/image";
import DLink from "../components/DLink";
import image from "./image.png"
export const runtime = "edge";

export type ServerReceipt = {
    item: {
        title: string;
        price: number;
        priceUnit: string;
        id: string | null;
        count: number;
    }[],
    payment: {
        linkType: "notLink" | "square"
        method: "cash" | "credit" | "credit_manual" | "waon" | "nanaco" | "edy" | "id" | "quicpay_plus" | "super_urban_intelligence_card" | "paypay" | "dbarai" | "rakutenpay" | "aupay" | "merpay" | "wechatpay" | "alipay_plus",
        methodName: string,
        name: string,
        paymentData: {
            [key: string]: string
        } | null,
        terminalName: string,
    }
    print: number,
    time: {
        _seconds: number,
        _nanoseconds: number
    }, // サーバ上ではtimestamp
    event: {
        name: string,
        id: string
    },
    cancelled: boolean
}


export default async function ReceiptPage({ searchParams }: { searchParams: Promise<{token: string}> }) {
    const { token } = await searchParams

    if (token == null) {
        return <>
            <main className="w-full md:m-auto flex gap-2">
                <div className={`w-full bg-neutral-800 border border-neutral-700 rounded`}>
                    <div className="bg-neutral-700 p-3 pl-5">
                        <h1 className="w-full font-bold text-3xl mb-1">電子レシート</h1>
                        <div><DLink href={"/"}>トップ</DLink> &gt; 電子レシート</div>
                    </div>

                    <div className="mx-2 flex flex-col gap-3 p-3">
                        イベント出店にて発行したレシートに、電子レシートへの二次元コードがある場合があります。<br />
                        その場合は読み込むと電子レシートを見ることができます。<br />

                        <div className="flex items-center flex-col gap-1.5">

                            <Image src={image} alt="電子レシートのサンプル" width={300}/>
                            <span className="text-sm">電子レシートのサンプル</span>
                        </div>
                    </div>
                </div>
            </main>
        </>
    }

    const response = await fetch(`${process.env.ERECEIPT_API_ENDPOINT}/getReceipt?token=${token}`)

    if (response.status !== 200) {
        return <>
            <main className="w-full md:m-auto flex gap-2">
                <div className={`w-full bg-neutral-800 border border-neutral-700 rounded`}>
                    <div className="bg-neutral-700 p-3 pl-5">
                        <h1 className="w-full font-bold text-3xl mb-1">電子レシート</h1>
                        <div><DLink href={"/"}>トップ</DLink> &gt; 電子レシート</div>
                    </div>

                    <div className="mx-2 flex flex-col gap-3 p-3">
                        指定された電子レシートのデータがありません
                    </div>
                </div>
            </main>
        </>
    }

    const obj = await response.json() as ServerReceipt;
    const sum = obj.item.reduce((s, e) => s + (e.count || 0) * e.price, 0);

    return <>
        <main className="w-full md:m-auto flex gap-2">
            <div className={`w-full bg-neutral-800 border border-neutral-700 rounded`}>
                <div className="bg-neutral-700 p-3 pl-5">
                    <h1 className="w-full font-bold text-3xl mb-1">電子レシート</h1>
                    <div><DLink href={"/"}>トップ</DLink> &gt; 電子レシート</div>
                </div>

                <div className="mx-2 flex flex-col gap-5 p-3">
                    <div>
                        <div>{obj.event.name} お買い上げありがとうございます。</div>
                        <div>{obj.time._seconds * 1000} ({new Date(obj.time._seconds * 1000).toString()})</div>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">購入明細</h2>
                        <div className="mx-3 mt-2">
                            <table className="border-collapse border border-neutral-700">
                                <thead className="[&_th]:border [&_th]:border-neutral-700 [&_th]:p-1 [&_th]:px-2">
                                    <tr>
                                        <th>商品名</th>
                                        <th>単価</th>
                                        <th className="text-right">個数</th>
                                        <th>値段</th>
                                    </tr>
                                </thead>
                                <tbody className="[&_td]:border [&_td]:border-neutral-700 [&_td]:p-1 [&_td]:px-2">
                                    {
                                        obj.item.map((e) => (
                                            <tr key={e.title}>
                                                <td>{e.title}</td>
                                                <td>{e.priceUnit} {e.price.toLocaleString()}</td>
                                                <td className="text-right">{e.count.toLocaleString()}</td>
                                                <td>{e.priceUnit} {(e.price * e.count).toLocaleString()}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                        <div className="mx-3 mt-2">
                            <table className="border-collapse border border-neutral-700">
                                <tbody className="[&_td]:border [&_td]:border-neutral-700 [&_td]:p-1 [&_td]:px-2">
                                    <tr>
                                        <td>合計</td>
                                        <td>JPY {sum.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td>{obj.payment.methodName} 支払</td>
                                        <td>JPY {sum.toLocaleString()}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* <div>
                        <h2 className="text-xl font-bold">クレジットカード売上票</h2>
                        <div className="mx-3 mt-2">
                            <table className="border-collapse border border-neutral-700">
                                <thead className="[&_th]:border [&_th]:border-neutral-700 [&_th]:p-1 [&_th]:px-2">
                                    <tr>
                                        <th>商品名</th>
                                        <th>単価</th>
                                        <th className="text-right">個数</th>
                                        <th>値段</th>
                                    </tr>
                                </thead>
                                <tbody className="[&_td]:border [&_td]:border-neutral-700 [&_td]:p-1 [&_td]:px-2">
                                    {
                                        obj.item.map((e) => (
                                            <tr key={e.title}>
                                                <td>{e.title}</td>
                                                <td>{e.priceUnit} {e.price}</td>
                                                <td className="text-right">{e.count}</td>
                                                <td>{e.priceUnit} {e.price * e.count}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div> */}

                    <div>
                        <h2 className="text-xl font-bold">注記</h2>
                        <div className="mx-3 mt-2">
                            お問い合わせは下記メールまで<br />
                            csc_a452p@gmail.com
                        </div>
                    </div>

                </div>
            </div>
        </main>
    </>
}
