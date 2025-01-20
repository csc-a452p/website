
type eventType = {
    name: {
        full: string,
        name: string,
        count: number
    },
    start: string,
    end?: string,
    place: string,
    sell: eventSellItem[],
    additionalLinks?: {
        [key: string]: string
    },
    willPart: boolean
}

type eventSellItem = {
    isNewly: boolean,
    name: string,
    id: string,
    price: number,
    priceUnit: string,
    barcode?: string[],
}
