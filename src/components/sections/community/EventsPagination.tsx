"use client";

import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import PaginatedList from "@/components/pagination/PaginatedList";
import { EventsPaginationProps, EventData } from "@/types/event";

export default function EventsPagination({
  eventsData,
  itemsPerPage,
}: EventsPaginationProps) {
  const renderEventItem = (event: EventData, index: number) => (
    <div
      key={`${event.title}-${index}`}
      className="primaryCardTheme borderColor p-5 rounded-lg shadow-sm"
    >
      <div className="flex flex-col md:flex-row items-start gap-3 md:gap-4">
        <div className="flex-1 w-full text-left">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="mb-2 w-full">
              <h3 className="textColor md:text-lg text-base font-semibold flex items-center">
                {event.title}
              </h3>
              <div className="textSecondaryColor text-sm md:text-base flex items-center gap-1 mt-1">
                <FaCalendarAlt className="h-4 w-4" />
                {event.date}
              </div>
              <div className="textSecondaryColor text-sm md:text-base flex items-center gap-1 mt-1">
                <FaMapMarkerAlt className="h-4 w-4" />
                {event.location}
              </div>
            </div>
          </div>
          <p className="textSecondaryColor text-sm md:text-base mt-2">
            {event.description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <PaginatedList
      items={eventsData}
      itemsPerPage={itemsPerPage}
      renderItem={renderEventItem}
    />
  );
}
