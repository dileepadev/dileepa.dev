export interface CommunityLogo {
  light: string;
  dark: string;
}

export interface Community {
  _id: string;
  name: string;
  role: string;
  period: string;
  description: string;
  logo: CommunityLogo;
  current: boolean;
}
