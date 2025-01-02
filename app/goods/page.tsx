import { Metadata } from "next";
import { GoodsBookItem, GoodsItemItem } from "../components/GoodsItem";
import DLink from "../components/DLink";
import { join, parse } from "path";
import { readFileSync } from "fs";
import { listFiles } from "../utils/listFiles";
import { DATA_PATH, NEWLY_GOODS_PATH } from "../utils/dataConst";

export const metadata: Metadata = {
    title: '販売品一覧',
}

function generateElement(arr: { id: string, goods: goods }[]) {
    return arr.map(({ id, goods }) => {
        if (goods.type == "book") {
            return <GoodsBookItem
                key={id}
                title={goods.title}
                author={goods.author.show}
                detailUrl={`/goods/${id}`}
                size={goods.size}
                page={goods.pages}
                cost={goods.price}
                costUnit={goods.priceUnit}
                isdnStr={goods.code.isdn}
                isdnURL={goods.code.url}
                Ccode={goods.code.cCode}
                hasEBook={goods.onlineSaleUrl !== undefined}
                eBookURL={goods.onlineSaleUrl} />
        }
        else if (goods.type == "item") {
            return <GoodsItemItem
                key={id}
                title={goods.title}
                author={goods.author.show}
                detailUrl={`/goods/${id}`}
                price={goods.price}
                priceUnit={goods.priceUnit}
                onlineSaleUrl={goods.onlineSaleUrl} />
        }
        else{
            throw new Error("generateElementに未定義のタイプが渡されました")
        }
    })
}

export default function Home() {
    const goodsPathList = listFiles(join(DATA_PATH, "goods"));
    const { newly }: { newly: string[] } = JSON.parse(readFileSync(NEWLY_GOODS_PATH, "utf-8"));

    const goodsList = goodsPathList.map(e => ({
        id: parse(e).name,
        goods: JSON.parse(readFileSync(e, "utf-8")) as goods
    }))

    const goodsNewlyList = newly.map(e => ({
        id: e,
        goods: JSON.parse(readFileSync(join(DATA_PATH, "goods", e + ".json"), "utf-8"))
    }))

    // 日付で降順ソート
    goodsList.sort((a, b) => Date.parse(b.goods.releaseDate) - Date.parse(a.goods.releaseDate));

    return (
        <>
            <main className="w-full md:m-auto flex gap-2">
                <div className={`w-full bg-neutral-800 border border-neutral-700 rounded`}>
                    <div className="bg-neutral-700 p-3 pl-5">
                        <h1 className="w-full font-bold text-3xl mb-1">販売品一覧</h1>
                        <div><DLink href={"/"}>トップ</DLink> &gt; 販売品一覧</div>
                    </div>

                    <div className="mx-2 flex flex-col gap-3 p-3">

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold">新刊</h2>
                            <div className="mx-3 flex flex-col gap-2">
                                新刊の定義がわからないので、一番最近に刊行したものを新刊とします。
                                {generateElement(goodsNewlyList)}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold">一覧</h2>

                            <div className="mx-3 flex flex-col gap-2">
                                {generateElement(goodsList)}
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
