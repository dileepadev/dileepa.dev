"use client";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function PaginationControls({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationControlsProps) {
  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const goToNextPage = () => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };

  const goToPreviousPage = () => {
    onPageChange(Math.max(currentPage - 1, 1));
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="space-y-2">
      <div className="flex justify-center items-center mt-6 space-x-2">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={`p-2 rounded-full flex items-center justify-center buttonColor textColor ${
            currentPage === 1
              ? "paginationItemColor cursor-not-allowed"
              : "cursor-pointer"
          }`}
          aria-label="Previous page"
        >
          <HiChevronLeft className="h-5 w-5 textColor" />
        </button>

        <div className="flex space-x-1">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => onPageChange(number)}
              className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer text-sm font-medium transition-colors ${
                currentPage === number
                  ? "paginationItemActiveColor"
                  : "buttonColor textColor"
              }`}
              aria-label={`Page ${number}`}
              aria-current={currentPage === number ? "page" : undefined}
            >
              {number}
            </button>
          ))}
        </div>

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-full flex items-center justify-center buttonColor textColor ${
            currentPage === totalPages
              ? "paginationItemColor cursor-not-allowed"
              : "cursor-pointer"
          }`}
          aria-label="Next page"
        >
          <HiChevronRight className="h-5 w-5 textColor" />
        </button>
      </div>

      {/* Page indicator */}
      <div className="text-center textSecondaryColor text-sm">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
}
