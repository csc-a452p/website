type Errata = {
    [revision: string]: ErrataItem[]
}

type ErrataItem = {
    at: string,
    wrong?: string,
    correct?: string,
    wrongImg?: string,
    correctImg?: string
}
