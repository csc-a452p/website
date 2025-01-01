import { Metadata } from "next";
import DLink from "../components/DLink";
import ErrataItem from "../components/ErrataItem";

export const metadata: Metadata = {
    title: '正誤表',
}

export default function Home() {
    return (
        <>
            <main className="w-full md:m-auto flex gap-2">
                <div className={`w-full bg-neutral-800 border border-neutral-700 rounded`}>
                    <div className="bg-neutral-700 p-3 pl-5">
                        <h1 className="w-full font-bold text-3xl mb-1">正誤表</h1>
                        <div><DLink href={"/"}>トップ</DLink> &gt; 正誤表</div>
                    </div>

                    <div className="mx-2 flex flex-col gap-3 p-3">
                        {<div>本同好会作成物に下記の通り誤りがございました. お詫びして訂正いたします.</div>}
                        {/* 追加する方へ ErrataItemをコピペで増やしてください 各引数を適切に設定してください */}
                        <ErrataItem
                            target={"ンゴシリーズ vol-1(初版)"}
                            errata= {[{at: "1p",falseErrata: "あ",trueErrata: "い"},{at: "1p",falseErrata: "う",trueErrata: "え"}]}
                        />
                        <ErrataItem
                            target={"ンゴシリーズ vol-1(第2版)"}
                            errata= {[{at: "1p",falseErrata: "い",trueErrata: "ろはにほへと"}]}
                        />
                    </div>

                </div>
            </main>
        </>
    );
}
