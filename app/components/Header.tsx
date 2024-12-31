import Link from "next/link";

export default function Header() {
    return <header>
        <div className="flex mt-2 md:my-5 mb-5 flex-col gap-2 md:flex-row md:items-end">
            <Link href={"/"}>
                <span className="font-[900] text-3xl leading-none">情報工学同好会</span>
                <span className="font-[900] text-2xl leading-none ml-2">(非公認)</span>
            </Link>
        </div>
    </header>;
}
