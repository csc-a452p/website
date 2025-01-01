import { Metadata } from "next";
import GoodsItem from "../components/GoodsItem";
import DLink from "../components/DLink";

export const metadata: Metadata = {
    title: '刊行・制作物一覧',
}

export default function Home() {
    return (
        <>
            <main className="w-full md:m-auto flex gap-2">
                <div className={`w-full bg-neutral-800 border border-neutral-700 rounded`}>
                    <div className="bg-neutral-700 p-3 pl-5">
                        <h1 className="w-full font-bold text-3xl mb-1">刊行・制作物一覧</h1>
                        <div><DLink href={"/"}>トップ</DLink> &gt; 刊行・制作物一覧</div>
                    </div>

                    <div className="mx-2 flex flex-col gap-3 p-3">

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold">新刊</h2>
                            <div className="mx-3 flex flex-col gap-2">
                                新刊の定義がわからないので、一番最近に刊行したものを新刊とします。
                                <GoodsItem
                                    title={"ンゴシリーズ vol.1"}
                                    author={"情報工学同好会 総員"}
                                    detailUrl={"goods/ngo_vol1"}
                                    size={"A4"}
                                    page={52}
                                    cost={500}
                                    costUnit={"JPY"}
                                    isdnStr={"ISDN278-4-874194-01-7"}
                                    isdnURL={"https://isdn.jp/2784874194017"}
                                    Ccode={"C3455"}
                                    hasEBook={true}
                                    eBookURL={"https://csc-a452p.booth.pm/items/6439916"} />
                            </div>

                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold">一覧</h2>

                            <div className="mx-3 flex flex-col gap-2">
                                <GoodsItem
                                    title={"ンゴシリーズ vol.1"}
                                    author={"情報工学同好会 総員"}
                                    detailUrl={"goods/ngo_vol1"}
                                    size={"A4"}
                                    page={52}
                                    cost={500}
                                    costUnit={"JPY"}
                                    isdnStr={"ISDN278-4-874194-01-7"}
                                    isdnURL={"https://isdn.jp/2784874194017"}
                                    Ccode={"C3455"}
                                    hasEBook={true}
                                    eBookURL={"https://csc-a452p.booth.pm/items/6439916"} />
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
