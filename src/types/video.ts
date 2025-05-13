export interface VideoData {
  _id: string;
  title: string;
  views: string;
  date: string;
  link: string;
  thumbnail: string;
  description?: string;
}

export type VideosPaginationProps = {
  videosData: VideoData[];
  itemsPerPage: number;
};
