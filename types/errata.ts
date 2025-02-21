export type Errata = {
    [revision: string]: errataItem[]
}

export type errataItem = {
    at: string,
    wrong?: string,
    correct?: string,
    wrongImg?: string,
    correctImg?: string
}
