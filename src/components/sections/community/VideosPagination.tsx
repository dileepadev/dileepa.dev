"use client";

import { FaCalendarAlt, FaExternalLinkAlt, FaYoutube } from "react-icons/fa";
import PaginatedList from "@/components/pagination/PaginatedList";
import { VideosPaginationProps, VideoData } from "@/types/video";

export default function VideosPagination({
  videosData,
  itemsPerPage,
}: VideosPaginationProps) {
  const renderVideoItem = (video: VideoData, index: number) => (
    <div
      key={`${video.title}-${index}`}
      className="primaryCardTheme borderColor p-5 rounded-lg shadow-sm"
    >
      <div className="flex flex-col">
        <div className="mb-2 w-full">
          <h3 className="textColor md:text-lg text-base font-semibold flex items-center">
            {video.title}
          </h3>
          <div className="textSecondaryColor text-sm md:text-base flex items-center gap-1 mt-1">
            <FaCalendarAlt className="h-4 w-4" />
            {video.date}
          </div>
          <div className="textSecondaryColor text-sm md:text-base mt-1">
            <FaYoutube className="h-4 w-4 inline-block mr-1" />
            YouTube
          </div>
        </div>
        <p className="textSecondaryColor text-sm md:text-base mt-2">
          {/* {video.description} */} No description available.
        </p>
        <a
          href={video.link}
          target="_blank"
          rel="noopener noreferrer"
          className="textButtonColor buttonTransition text-sm md:text-base flex items-center gap-1 mt-3 hover:underline"
        >
          Watch video <FaExternalLinkAlt className="h-3 w-3 ml-1" />
        </a>
      </div>
    </div>
  );

  return (
    <PaginatedList
      items={videosData}
      itemsPerPage={itemsPerPage}
      renderItem={renderVideoItem}
    />
  );
}
