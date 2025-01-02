
type eventType = {
    name: {
        full: string,
        name: string,
        count: number
    },
    start: string,
    end?: string,
    place: string,
    sell: SellItem[],
    additionalLink: {
        [key: string]: string
    },
    willPart: boolean
}

type SellItem = {
    isNewly: boolean,
    name: string,
    id: string,
    price: number,
    priceUnit: string
}
