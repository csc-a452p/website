"use client";

import { FormEvent } from "react";

async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // const formData = new FormData(event.currentTarget);

    // const response = await fetch(process.env.API_URL || "");
}

export default function Form() {
    if (process.env.NEXT_PUBLIC_API_URL == undefined) {
        throw new Error("")
    }

    return <form onSubmit={onSubmit}>
        <div>
            <div className="text-sm mb-1">お名前</div>
            <input type="text" className="bg-neutral-800 border border-neutral-700 rounded p-2" placeholder="" name="name" required />
        </div>

        <div className="mt-2">
            <div className="text-sm mb-1">返信用メールアドレス</div>
            <input type="email" className="bg-neutral-800 border border-neutral-700 rounded p-2" placeholder="example@example.com" name="email" required />
        </div>

        <div className="mt-2 w-full">
            <div className="text-sm mb-1">本文</div>
            <textarea
                className="bg-neutral-800 border border-neutral-700 rounded p-2 w-full"
                placeholder="1000文字が上限です。それ以上の場合はpastebinにでも貼り付けてください。"
                name="content"
                maxLength={1000}
                required
            />
        </div>

        <div className="mt-2 w-full">
            <button type="submit" className="bg-neutral-800 border border-neutral-700 rounded px-2 py-1">送信</button>
        </div>
    </form>
}
