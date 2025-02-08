export interface Event {
  id: number;
  title: string;
  subtitle: string;
  startDate: string;
  endDate: string;
  color: string;
}

export type ViewMode = 'month' | 'quarter';