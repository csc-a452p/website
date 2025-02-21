export type Notice = {
    notice: noticeItem[]
}


export type noticeItem = {
    time: number,
    content: string,
    author: string,
    isNew: boolean
}
