export interface CommunityLogo {
  light: string;
  dark: string;
}

export interface CommunityData {
  _id: string;
  name: string;
  role: string;
  period: string;
  description: string;
  logo: CommunityLogo;
  current: boolean;
}

export type CommunitiesPaginationProps = {
  communityData: CommunityData[];
  itemsPerPage: number;
};
