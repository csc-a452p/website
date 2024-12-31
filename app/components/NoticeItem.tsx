import { ReactNode } from "react";

export default function NoticeItem({ time, children, author }: { time: Date, children: ReactNode, author: string }) {
    return <>
        <li>
            <div>{time.toISOString()}</div>
            <div>{children} (by {author})</div>
        </li>
    </>;
}
