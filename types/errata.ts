type Errata = {
    [revision: string]: errataItem[]
}

type errataItem = {
    at: string,
    wrong?: string,
    correct?: string,
    wrongImg?: string,
    correctImg?: string
}
