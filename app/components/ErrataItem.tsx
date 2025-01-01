import { ReactNode } from "react";
import DLink from "./DLink";

type Props = {
    target: string,
    errata: {
        at: string,
        falseErrata: string,
        trueErrata: string
    }[]
}

export default function ErrataItem({ target, errata }: Props) {
    return <div className="border border-neutral-700 text-wrap px-3 py-2">
        <div className="font-bold text-2xl leading-none my-1">{target}</div>
        <div className="mt-2">
            <table className="border-collapse border border-neutral-700">
                <thead className="[&_th]:border [&_th]:border-neutral-700 [&_th]:p-1 [&_th]:px-2">
                    <tr>
                        <th>箇所</th>
                        <th>誤</th>
                        <th>正</th>
                    </tr>
                </thead>
                <tbody className="[&_td]:border [&_td]:border-neutral-700 [&_td]:p-1 [&_td]:px-2">
                    {
                        errata.map((e, i) => {
                            return <tr key={i}>
                                <td>{e.at}</td>
                                <td>{e.falseErrata}</td>
                                <td>{e.trueErrata}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

        </div>
    </div>;
}
