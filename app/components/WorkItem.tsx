import React from "react";
import Image from "next/image";



export default function WorkItem({ thumbnail, title, description,link }: { thumbnail: string, title: string, description: string, link: string }) {
    return (
        <div className="flex border border-neutral-700 rounded-lg p-2 my-2 shadow-md bg-[#191919]">
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
                <h3 className="m-0 text-lg font-bold text-white">{title}</h3>
                <p className="mt-1 text-sm text-gray-300">{description}</p>
            </div>
        </div>
    );
}
