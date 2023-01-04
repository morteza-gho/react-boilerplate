import { createContext } from "react";

export const appContext = createContext({
  showSidebar: true,
  toggleSidebar: () => { }, // toggle main sidebar
  showUserDropDown: false,
  toggleUserDropDown: () => { } // toggle user dropdown in header
});