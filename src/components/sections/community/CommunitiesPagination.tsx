"use client";

import Image from "next/image";
import PaginatedList from "@/components/pagination/PaginatedList";
import { CommunitiesPaginationProps, CommunityData } from "@/types/community";

export default function CommunitiesPagination({
  communityData,
  itemsPerPage,
}: CommunitiesPaginationProps) {
  const renderCommunityItem = (community: CommunityData) => (
    <div
      key={community.name}
      className="primaryCardTheme borderColor p-5 rounded-lg shadow-sm"
    >
      <div className="flex flex-col md:flex-row items-start gap-3 md:gap-4">
        <Image
          src={community.logo.dark || "/placeholder.svg"}
          alt={`${community.name} logo`}
          loading="eager"
          height={80}
          width={80}
          className="object-contain p-2"
        />
        <div className="flex-1 w-full text-left">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="mb-2 w-full">
              <h3 className="textColor md:text-lg text-base font-semibold flex flex-col md:flex-row md:items-center">
                {community.name}
                {community.current && (
                  <span className="miniCardChipTheme ml-0 md:ml-2 mt-1 md:mt-0 mb-2 md:mb-0 px-2 py-0.5 text-xs rounded-full font-medium self-start md:self-auto">
                    Current
                  </span>
                )}
              </h3>
              <div className="textSecondaryColor text-sm md:text-base">
                {community.role}
              </div>
              <div className="textSecondaryColor text-sm md:text-base">
                {community.period}
              </div>
            </div>
          </div>
          <p className="textSecondaryColor text-sm md:text-base">
            {community.description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <PaginatedList
      items={communityData}
      itemsPerPage={itemsPerPage}
      renderItem={renderCommunityItem}
    />
  );
}
