import { Metadata } from "next";
import DLink from "../components/DLink";
import MemberItem from "../components/MemberItem";

export const metadata: Metadata = {
    title: 'メンバー紹介',
}

export default function Home() {
    return (
        <>
            <main className="w-full md:m-auto flex gap-2">
                <div className={`w-full bg-neutral-800 border border-neutral-700 rounded`}>
                    <div className="bg-neutral-700 p-3 pl-5">
                        <h1 className="w-full font-bold text-3xl mb-1">メンバー紹介</h1>
                        <div><DLink href={"/"}>トップ</DLink> &gt; メンバー紹介</div>
                    </div>

                    <div className="mx-2 flex flex-col gap-3 p-3">
                        {/* 追加する方へ MemberItemをコピペで増やしてください 良い感じの説明文も書いてほしいです */}
                        <MemberItem
                            name={"nikachu2012 (s23112)"}
                            link={{
                                "Twitter": "https://twitter.com/nikachu2012",
                                "Instagram": "https://instagram.com/nikachu2012",
                                "Portfolio": "https://portfolio.nikachu.net",
                                "GPG Public Key": "https://portfolio.nikachu.net/publickey"
                            }}
                        >
                            彼女が欲しいです
                        </MemberItem>
                        <MemberItem
                            name={"Toukaitetudou (s23118)"}
                            link={{
                                "Twitter": "https://twitter.com/Toukaitetudou",
                                "Blog":"https://toukaitetudou.hatenablog.com/",
                                "GitHub": "https://github.com/TKRwm100"
                            }}
                        >
                            コーディングはすべてを解決する
                        </MemberItem>
                        <MemberItem
                            name={"npnp (s23131)"}
                            link={{
                                "Twitter": "https://twitter.com/css_py",
                                "Instagram": "https://www.instagram.com/csspy1185/",
                                "Facebook":"https://www.facebook.com/profile.php?id=100095130291067",
                                "Moodle":"https://moodle.numazu-ct.ac.jp/moodle/user/profile.php?id=5588",
                                "GitHub": "https://github.com/KohsukeFujita"
                            }}
                        >
                            エレファント解法こそすべて
                        </MemberItem>
                    </div>
                </div>
            </main>
        </>
    );
}
