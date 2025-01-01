import { Metadata } from "next";
import DLink from "../components/DLink";
import Form from "./Form";

export const metadata: Metadata = {
    title: 'お問い合わせ',
}


export default function Home() {
    return (
        <>
            <main className="w-full md:m-auto flex gap-2">
                <div className={`w-full bg-neutral-800 border border-neutral-700 rounded`}>
                    <div className="bg-neutral-700 p-3 pl-5">
                        <h1 className="w-full font-bold text-3xl mb-1">お問い合わせ</h1>
                        <div><DLink href={"/"}>トップ</DLink> &gt; お問い合わせ</div>
                    </div>

                    <div className="mx-2 flex flex-col gap-3 p-3">
                        <div>
                            真面目なお問い合わせは以下のフォームまたは、本文奥付に記載のメールアドレスに送信してください。<br />
                            暗号化が必要な場合は <DLink href="https://portfolio.nikachu.net/publickey" target="_blank">GPG公開鍵</DLink> を利用してください。
                        </div>

                        <Form />
                    </div>
                </div>
            </main>
        </>
    );
}
