type goods = goodsBook;

type goodsBook = {
    type: "book",
    title: string,
    series: string,
    vol: number,
    releaseDate: string,
    description: string,
    thumbnail: string,
    code: bookCodeISDN,
    pages: number,
    author: {
        show: string,
        detail?: string[]
    },
    tableOfContents: string[],
    genre: string[],
    lang: string,
    tags: string[],
    isR18: boolean,
    price: number,
    priceUnit: string,
    size: string,
    notes: string,
    onlineSaleUrl?: string
    salesHistory: saleHistoryItem[],
    revisionHistory: revisionHistoryItem[],
    additionalFields: {
        [key: string]: string
    },
    additionalLinks: {
        [key: string]: string
    }
}

type bookCodeISDN = {
    type: "isdn",
    isdn: string,
    cCode: string,
    url: string, // ベースURLからの相対パス
}

type saleHistoryItem = {
    event: string,
    start: string,
    end?: string,
    revision: number,
    price: string,
    priceUnit: string
}

type revisionHistoryItem = {
    revision: number,
    print: number,
    releaseDate: string,
    place: string
}
