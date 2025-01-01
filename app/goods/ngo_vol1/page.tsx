import { Metadata } from "next";
import Image from "next/image";
import DLink from "@/app/components/DLink";

export const metadata: Metadata = {
    title: 'お知らせ',
}

export default function Page() {
    return (
        <>
            <main className="w-full md:m-auto flex gap-2">
                <div className={`w-full bg-neutral-800 border border-neutral-700 rounded`}>
                    <div className="bg-neutral-700 p-3 pl-5">
                        <h1 className="w-full font-bold text-3xl mb-1">ンゴシリーズ vol.1</h1>
                        <div><DLink href="/">トップ</DLink> &gt; <DLink href={"/goods"}>刊行・制作物一覧</DLink> &gt; ンゴシリーズ vol.1</div>
                    </div>

                    <div className="mx-2 flex flex-col gap-2 p-3">
                        <div className="flex justify-center">
                            <Image src={"/assets/goods/ngo_vol1/front.png"} width={300} height={424} alt="ンゴシリーズ vol.1の表紙" className="border border-neutral-700" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold">基本情報</h2>
                            <div className="mx-3">
                                <table className="border-collapse border border-neutral-700">
                                    <tbody className="[&_td]:border [&_td]:border-neutral-700 [&_td]:p-1 [&_td]:px-2">
                                        <tr>
                                            <td>名称</td>
                                            <td>ンゴシリーズ vol.1</td>
                                        </tr>
                                        <tr>
                                            <td>著者</td>
                                            <td>情報工学同好会 総員 (2024年現在)</td>
                                        </tr>
                                        <tr>
                                            <td>ISDN (Cコード)</td>
                                            <td>ISDN278-4-874194-01-7 (C3455)</td>
                                        </tr>
                                        <tr>
                                            <td>サイズ</td>
                                            <td>A4 (210x297mm)</td>
                                        </tr>
                                        <tr>
                                            <td>ページ数</td>
                                            <td>52ページ (表紙込)</td>
                                        </tr>
                                        <tr>
                                            <td>販売価格</td>
                                            <td>500 JPY</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="mt-3">
                                    <DLink href={"https://csc-a452p.booth.pm/items/6439916"} target="_blank">電子版販売ページはこちら</DLink>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 mt-3">
                            <h2 className="text-xl font-bold">紹介文</h2>
                            <div className="mx-3">
                                高専生が、情報や数理系のジャンルでまとめたいと思ったことをまとめる「ンゴシリーズ」のvol.1です。
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 mt-3">
                            <h2 className="text-xl font-bold">販売履歴</h2>
                            <div className="mx-3">
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
                                        <tr>
                                            <td>沼津高専 第59回高専祭</td>
                                            <td>2024-11-09 - 2024-11-10</td>
                                            <td>1</td>
                                            <td>500 JPY</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
