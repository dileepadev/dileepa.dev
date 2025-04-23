"use client";

import type React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  return (
    <div className="flex justify-center items-center mt-6 space-x-2">
      <button
        type="button"
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={`p-2 rounded-full flex items-center justify-center buttonColor textColor ${
          currentPage === 1
            ? "paginationItemColor cursor-not-allowed"
            : "cursor-pointer"
        }`}
        aria-label="Previous Page"
      >
        <HiChevronLeft />
      </button>

      <div className="flex space-x-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            type="button"
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${
              currentPage === page
                ? "paginationItemActiveColor"
                : "buttonColor textColor"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-full flex items-center justify-center buttonColor textColor ${
          currentPage === totalPages
            ? "paginationItemColor cursor-not-allowed"
            : "cursor-pointer"
        }`}
        aria-label="Next Page"
      >
        <HiChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
