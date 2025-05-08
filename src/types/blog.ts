export interface BlogData {
  _id: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
}

export type BlogsPaginationProps = {
  blogsData: BlogData[];
  itemsPerPage: number;
};
