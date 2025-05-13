"use client";

import { FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";
import PaginatedList from "@/components/pagination/PaginatedList";
import { BlogsPaginationProps, BlogData } from "@/types/blog";

export default function BlogsPagination({
  blogsData,
  itemsPerPage,
}: BlogsPaginationProps) {
  const renderBlogItem = (blog: BlogData, index: number) => (
    <div
      key={`${blog.title}-${index}`}
      className="primaryCardTheme borderColor p-5 rounded-lg shadow-sm"
    >
      <div className="flex flex-col">
        <div className="mb-2 w-full">
          <h3 className="textColor md:text-lg text-base font-semibold flex items-center">
            {blog.title}
          </h3>
          <div className="textSecondaryColor text-sm md:text-base flex items-center gap-1 mt-1">
            <FaCalendarAlt className="h-4 w-4" />
            {blog.date}
          </div>
          <div className="textSecondaryColor text-sm md:text-base mt-1">
            {/* {blog.platform} */} Personal Blog
          </div>
        </div>
        <p className="textSecondaryColor text-sm md:text-base mt-2">
          {blog.excerpt}
        </p>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="textButtonColor buttonTransition text-sm md:text-base flex items-center gap-1 mt-3 hover:underline"
        >
          Read article <FaExternalLinkAlt className="h-3 w-3 ml-1" />
        </a>
      </div>
    </div>
  );

  return (
    <PaginatedList
      items={blogsData}
      itemsPerPage={itemsPerPage}
      renderItem={renderBlogItem}
    />
  );
}
