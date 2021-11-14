export type UserRole = "super-admin" | "admin" | "operator";

export interface TopMenuItem {
  name: string;
  icon: string;
  link: string;
}

export interface BodyMenuItemModel {
  name: string;
  icon: object;
  link?: string;
}

export interface FooterMenuItemModel {
  name: string;
  icon: object;
  key: string;
  link?: string;
}
