export interface Event {
  id: string;
  title: string;
  time: string;
  description: string;
  category?: string;
  date: string;
  icon: string;
  sharedBy?: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  duration?: string;
  location?: string;
}
