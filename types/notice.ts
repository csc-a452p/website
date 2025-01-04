type Notice = {
    notice: NoticeItem[]
}


type NoticeItem = {
    time: number,
    content: string,
    author: string,
    isNew: boolean
}
