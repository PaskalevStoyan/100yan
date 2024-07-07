export type Links = {
  text: string;
  url?: string;
  selected?: boolean;
};

export type TabsProps = {
  title: string;
  text: React.ReactNode;
  selected: boolean;
};