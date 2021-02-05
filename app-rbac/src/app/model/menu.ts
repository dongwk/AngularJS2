export interface Menu {
  id: number;
  name: string;
  url: string;
  icon: string;
  code: string;
  children: Menu[];
}
