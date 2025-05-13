"use client";

import { usePagination } from "@/hooks/usePagination";
import PaginationControls from "./PaginationControls";
import React from "react";

interface PaginatedListProps<T> {
  items: T[];
  itemsPerPage: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  containerClassName?: string;
  listClassName?: string;
}

export default function PaginatedList<T>({
  items,
  itemsPerPage,
  renderItem,
  containerClassName = "",
  listClassName = "space-y-4",
}: PaginatedListProps<T>) {
  const { currentItems, currentPage, totalPages, onPageChange } = usePagination(
    items,
    itemsPerPage
  );

  return (
    <div className={`space-y-6 ${containerClassName}`}>
      <div className={`${listClassName}`}>{currentItems.map(renderItem)}</div>

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}
