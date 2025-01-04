type Notice = {
    notice: noticeItem[]
}


type noticeItem = {
    time: number,
    content: string,
    author: string,
    isNew: boolean
}
