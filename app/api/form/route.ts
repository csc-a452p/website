import { NextRequest } from "next/server";

export const runtime = "edge";

export async function POST(request: NextRequest) {
    const requestBody = await request.json();

    if (process.env.API_URL == undefined || process.env.DONT_USE_CLIENT_MSG == undefined) {
        throw new Error("API_URL is not defined in .env");
    }

    if (!(requestBody.name !== undefined && requestBody.email !== undefined && requestBody.content !== undefined)) {
        return Response.json({ status: false, reason: process.env.DONT_USE_CLIENT_MSG }, { status: 400 });
    }

    if (requestBody.name.length > 256) {
        return Response.json({ status: false, reason: process.env.DONT_USE_CLIENT_MSG }, { status: 400 });
    }

    if (requestBody.email.length > 256) {
        return Response.json({ status: false, reason: process.env.DONT_USE_CLIENT_MSG }, { status: 400 });
    }

    if (requestBody.content.length > 1000) {
        return Response.json({ status: false, reason: process.env.DONT_USE_CLIENT_MSG }, { status: 400 });
    }

    const responseBody = {
        "embeds": [
            {
                "title": "フォームにメッセージが届きました",
                "fields": [
                    {
                        "name": "名前",
                        "value": requestBody.name,
                        "inline": false
                    },
                    {
                        "name": "IPアドレス",
                        "value": request.headers.get('CF-Connecting-IP'),
                        "inline": false,
                    },
                    {
                        "name": "返信用メールアドレス",
                        "value": requestBody.email,
                        "inline": false
                    },
                    {
                        "name": "本文",
                        "value": requestBody.content,
                        "inline": false
                    }
                ]
            }
        ]
    }

    const resp = await fetch(process.env.API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(responseBody)
    });

    if (!resp.ok) {
        return Response.json({ status: false, reason: "送信できませんでした" }, { status: 400 });
    }

    return Response.json({ status: true })
}
