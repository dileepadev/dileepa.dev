export interface EventData {
  _id: string;
  title: string;
  date: string;
  location: string;
  format: string;
  description: string;
}

export type EventsPaginationProps = {
  eventsData: EventData[];
  itemsPerPage: number;
};
