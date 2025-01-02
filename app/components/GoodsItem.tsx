import Link from "next/link";
import DLink from "./DLink";

type BookProps = {
    title: string,
    author: string,
    detailUrl: string,
    size: string,
    page: number,
    cost: number,
    costUnit: string,
    isdnStr: string,
    isdnURL: string,
    Ccode: string,
    hasEBook: boolean,
    eBookURL?: string,
}

function Sep() {
    return <span className="mx-1 select-none">/</span>
}

export function GoodsBookItem({ title, author, detailUrl, size, page, cost, costUnit, isdnStr, isdnURL, Ccode, hasEBook, eBookURL }: BookProps) {
    return <div className="border border-neutral-700 text-wrap ">
        <div className="p-3">
            <div className="font-bold text-xl ">
                <DLink href={detailUrl}>{title}</DLink>
                <span className="ml-2">({author} 著)</span>
            </div>
            <div>
                <span>{size}</span><Sep />
                <span>{page}p</span><Sep />
                <span>{cost} {costUnit}</span><Sep />
                <span><Link href={isdnURL} target="_blank">{isdnStr}</Link> ({Ccode})</span>
                {hasEBook ? <>
                    <Sep /><DLink href={eBookURL || "eBookURL must be filled."} target="_blank">電子版あり</DLink>
                </> : <></>}
            </div>
            {/* <div className="flex justify-end gap-1">
                <button className="bg-neutral-600 py-1 px-3 rounded select-none">詳細</button>
                <button className="bg-neutral-600 py-1 px-3 rounded select-none">電子版を買う</button>
            </div> */}
        </div>
    </div>;
}

type ItemProps = {
    title: string,
    author: string,
    detailUrl: string,
    price: number,
    priceUnit: string,
    onlineSaleUrl?: string
}

export function GoodsItemItem({ title, author, detailUrl, price, priceUnit, onlineSaleUrl }: ItemProps) {
    return <div className="border border-neutral-700 text-wrap ">
        <div className="p-3">
            <div className="font-bold text-xl ">
                <DLink href={detailUrl}>{title}</DLink>
            </div>
            <div>
                <span>{author} 制作</span><Sep />
                <span>{price} {priceUnit}</span>
                {onlineSaleUrl !== undefined ? <>
                    <Sep /><DLink href={onlineSaleUrl || "eBookURL must be filled."} target="_blank">ネット販売あり</DLink>
                </> : <></>}
            </div>
        </div>
    </div>;
}

