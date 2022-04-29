export interface SidebarItem {
  id: string;
  nameUrl?: string;
  icon: string;
  title: string;
  children?: SidebarItem[];
  disabled?: boolean;
  group?: string;
}

export const NAVIGATIONS: SidebarItem[] = [
  {
    id: "menu1:lv1",
    title: "受験用URLの発行",
    icon: "global",
    nameUrl: "home-index",
    group: "home",
  },
  {
    id: "menu2:lv1",
    title: "発行済URL·フィードバック",
    icon: "document",
    nameUrl: "post-index",
    group: "post",
  },
  {
    id: "menu3:lv1",
    title: "アカウント設定",
    icon: "settings",
    nameUrl: "login-index",
    group: "auth",
  },
];
