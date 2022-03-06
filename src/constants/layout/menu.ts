const NAVIGATION_MENU = [
  {
    name: "Dashboard",
    icon: "mdi-dots-grid",
    path: "/allowUrl",
  },
  {
    name: "Users",
    icon: "mdi-account-circle",
    subMenus: [
      {
        name: "Management",
        icon: "mdi-account-multiple-outline",
        path: "/",
      },
      {
        name: "Settings",
        icon: "mdi-cog-outline",
        path: "/",
      },
    ],
  },
];

export default NAVIGATION_MENU;
