import Link from "next/link";
import { ReactNode } from "react";


export default function DLink({ children, href, className, target }: { children: ReactNode, href: string, className?: string, target?: string }) {
    return <Link href={href} className={`underline underline-offset-2 ${className}`} target={target}>{children}</Link>
}
