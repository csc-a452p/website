import { ReactNode } from "react";
import DLink from "./DLink";

type LinkList = {
    [text: string]: string;
}

export default function MemberItem({ name, link, children }: { name: string, link: LinkList, children: ReactNode }) {
    return <div className="border border-neutral-700 text-wrap px-3 py-2">
        <div className="font-bold text-2xl leading-none my-1">{name}</div>
        <div className="text-sm">
            <span className="mr-2 select-none">[</span>
            {
                Object.keys(link).map((e, i) => {
                    return <><DLink key={i} href={link[e]} className="mr-2" target="_blank">{e}</DLink><wbr /></>
                })
            }
            <span>]</span>
        </div>
        <div className="mt-2">
            {children}
        </div>
    </div>;
}
