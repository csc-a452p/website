import Link from "next/link";
import PDFViewer from "../../components/PDFViewer";
import { DATA_PATH } from "@/app/utils/dataConst";
import { readFileSync } from "fs";
import { join } from "path";


export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const path = join(DATA_PATH, "notes", "list.json");
    const f = JSON.parse(readFileSync(path, "utf-8"));
    const title = f[id];

    return {
        title: title
    }
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const path = join(DATA_PATH, "notes", "list.json");
    const f = JSON.parse(readFileSync(path, "utf-8"));
    const title = f[id];
    const pdfPath = "/assets/notes/"+id+".pdf";

    return (
        <>
            <main className="w-full md:m-auto flex gap-2">
                <div className={`w-full bg-neutral-800 border border-neutral-700 rounded`}>
                    <div className="bg-neutral-700 p-3 pl-5">
                        <h1 className="w-full font-bold text-3xl mb-1">{title ? title : "このページは存在しません。"}</h1>
                        <div>
                            <Link href={"/"} className="underline underline-offset-2" >トップ</Link> &gt; &thinsp;
                            <Link href={"/notes"} className="underline underline-offset-2" >雑記</Link>&gt; &thinsp;
                            {title}
                            </div>
                    </div>

                    <div className="mx-2 flex flex-col gap-3 p-3">
                        
                        {title && (
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-bold">{title}</h2>
                                <Link href={pdfPath} target="_blank" className="underline underline-offset-2" >PDF版</Link>
                                <div className="mx-3 flex flex-col gap-2">
                                    <ul className="list-disc ml-5">
                                        <PDFViewer pdfUrl={pdfPath} />
                                    </ul>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </main>
        </>
    );
}
