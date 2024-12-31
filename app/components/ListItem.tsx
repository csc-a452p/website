import Link from "next/link";
import { ReactNode } from "react";

type Props = {
    children: ReactNode,
    href?: string,
    className?: string,
    target?: string
}

export default function ListItem({ children, href, className, target }: Props) {
    return <li className={`${className} underline underline-offset-2`}><Link href={href || ""} target={target}>{children}</Link></li>
}
