import React from "react";
import Image from "next/image";
import Link from "next/link";



export default function WorkItem({ thumbnail, title, description, link, external }: {
    thumbnail: string, title: string, description: string, link: string,
    external?: boolean
}) {
    const externalIconSrc = '/assets/works/externalicon.svg'; // 固定アイコンソース
    return (
        <div className="flex border border-neutral-700 rounded-lg p-2 shadow-md bg-[#191919]">
            <a href={link} target="_blank" rel="noopener noreferrer" className="relative w-24 h-24 mr-2">
                <Image
                    src={thumbnail}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </a>
            <div className="flex-1">
                <h3 className="m-0 text-lg font-bold text-white">
                    <Link href={link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        {title}
                        {external && (
                            <span className="ml-2 relative w-4 h-4">
                                <Image
                                    src={externalIconSrc}
                                    alt="External Link Icon"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </span>
                        )}
                    </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-300">{description}</p>
            </div>
        </div>
    );
}
