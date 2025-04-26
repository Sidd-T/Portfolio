export type Menu = {
  id: number;
  title?: string;
  path?: string;
  scrollPos?: string;
  newTab?: boolean;
  keyType?: string;
  note?: string;
  submenu?: Menu[];
};
