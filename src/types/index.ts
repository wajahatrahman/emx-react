export type ViewType = 'month' | 'quarter';

export type Event = {
  id: number;
  title: string;
  description: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  color: string;
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export type HeroImage = {
  url: string;
  textColor: string;
};