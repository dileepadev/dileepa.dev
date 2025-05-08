"use client";

import { usePagination } from "@/hooks/usePagination";
import PaginationControls from "./PaginationControls";
import React from "react";

interface PaginatedListProps<T> {
  items: T[];
  itemsPerPage: number;
  renderItem: (item: T, index: number) => React.ReactNode;
}

export default function PaginatedList<T>({
  items,
  itemsPerPage,
  renderItem,
}: PaginatedListProps<T>) {
  const { currentItems, currentPage, totalPages, onPageChange } = usePagination(
    items,
    itemsPerPage
  );

  return (
    <div className="space-y-6">
      <div className="space-y-4">{currentItems.map(renderItem)}</div>

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}
