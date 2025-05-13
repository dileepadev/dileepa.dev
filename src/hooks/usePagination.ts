"use client";

import { useState, useMemo } from "react";

export function usePagination<T>(items: T[], itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Get current items
  const currentItems = useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return items.slice(indexOfFirstItem, indexOfLastItem);
  }, [items, currentPage, itemsPerPage]);

  // Change page
  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return {
    currentPage,
    totalPages,
    currentItems,
    onPageChange,
  };
}
