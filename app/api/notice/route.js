export const runtime = "edge";

// type NoticeItem = {
//     time: number,
//     content: string,
//     author: string
// }

export async function GET() {
    if (!process.env.csc_notice) {
        return new Response(null, { status: 400 })
    }

    const notice = await process.env.csc_notice.get("notice", "json")
    return notice;
}
