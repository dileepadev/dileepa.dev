"use client";

import Image from "next/image";
import Link from "next/link";
import { VideoData, VideosPaginationProps } from "@/types/video";
import { FaExternalLinkAlt } from "react-icons/fa";
import PaginatedList from "@/components/pagination/PaginatedList";

export default function VideosPagination({
  videosData,
  itemsPerPage,
}: VideosPaginationProps) {
  const renderVideoItem = (video: VideoData, index: number) => (
    <div
      key={`${video._id}-${index}`}
      className="primaryCardTheme borderColor block rounded-lg overflow-hidden shadow-sm"
    >
      <div className="aspect-video relative w-full h-auto">
        <Image
          src={video.thumbnail || "/placeholder.svg"}
          alt={video.title}
          loading="eager"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col h-full">
        <h4 className="textColor font-semibold text-sm md:text-base mb-1 line-clamp-2">
          {video.title}
        </h4>
        <div className="textSecondaryColor text-sm mb-2 flex items-center gap-1 mt-1">
          {video.date}
        </div>
        <Link
          href={video.link}
          target="_blank"
          rel="noopener noreferrer"
          className="textButtonColor buttonTransition text-sm flex items-center gap-1"
        >
          Watch video <FaExternalLinkAlt className="h-3 w-3 ml-1" />
        </Link>
      </div>
    </div>
  );

  return (
    <PaginatedList
      items={videosData}
      itemsPerPage={itemsPerPage}
      renderItem={renderVideoItem}
      listClassName="grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-2 md:gap-4"
    />
  );
}
