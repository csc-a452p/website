import { ReactNode } from "react";

export default function Section({ title, children, className }: { title: ReactNode, children: ReactNode, className?: string }) {
    return <div className={`bg-neutral-800 border border-neutral-700 rounded px-5 py-3 ${className}`}>
        <h2 className="w-full font-bold text-xl mb-2">
            {title}
        </h2>
        <div className="ml-2 mt-1">
            {children}
        </div>
    </div>
}
