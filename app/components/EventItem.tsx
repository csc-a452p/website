import { eventType } from "@/types/event";
import DLink from "./DLink";


export default function EventItem({ event }: { event: eventType }) {
    return <div className="text-wrap">
        <div className="font-bold text-lg">{event.name.full}</div>
        <div className="mt-1">
            {event.start} {event.end ? ` - ${event.end}` : ""} / {event.place}
        </div>

        <div className="mt-1">
            <table className="border-collapse border border-neutral-700">
                <thead className="[&_th]:border [&_th]:border-neutral-700 [&_th]:p-1 [&_th]:px-2">
                    <tr>
                        <th>種別</th>
                        <th>商品名</th>
                        <th>値段</th>
                    </tr>
                </thead>
                <tbody className="[&_td]:border [&_td]:border-neutral-700 [&_td]:p-1 [&_td]:px-2">
                    {event.sell.map(e => (
                        <tr key={e.name}>
                            <td>{e.isNewly ? "新刊" : "既刊"}</td>
                            <td><DLink href={e.id.startsWith("https://") ? e.id : `/goods/${e.id}`}>{e.name}</DLink></td>
                            <td>{e.price} {e.priceUnit}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
}
