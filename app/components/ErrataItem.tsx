import { errataItem } from "@/types/errata";
import ImagePopup from "./ImagePopup";

type Props = {
    target: string,
    errata: errataItem[]
}

export default function ErrataItem({ target, errata }: Props) {
    return <div className="border border-neutral-700 text-wrap px-3 py-2">
        <div className="font-bold text-2xl leading-none my-1">{target}</div>
        <div className="mt-3">
            <ul className="list-disc ml-6 mt-3 flex flex-col gap-3">
                {
                    errata.map((e, i) => {
                        return <li key={i}>
                            <div>{e.at}</div>
                            <div className="flex mt-1">
                                <span className="font-bold">誤: </span>

                                <div className="ml-1">
                                    {e.wrongImg ?  <ImagePopup src={e.wrongImg} alt={`誤`} width={700} height={500} className="bg-white p-2" /> : e.wrong}

                                </div>
                            
                            </div>
                            <div className="flex mt-1">
                                <span className="font-bold">正: </span>

                                <div className="ml-1">
                                    {e.correctImg ? <ImagePopup src={e.correctImg} alt={`正`} width={700} height={500} className="bg-white p-2" /> : e.correct}
                                </div>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    </div>;
}
