// import { createBrowserRouter, type RouteObject } from "react-router";
// import { type RouterConfig } from "./types/router.type";
// import commonRouter from "./commonRouter";
// import Layout from "@/components/layouts";
// import Home from "@/modules/Home/pages";
// import Inbox from "@/modules/Inbox/pages";
// import App from "@/App";
// import Page404 from '@/modules/System/pages/404';
// import Search from "@/modules/Search/pages";
// import Settings from "@/modules/Settings/pages";
// import Calendar from "@/modules/Calendar/pages";

// const mockBackendAPI = {
//   getUserRoutes: async (userId: string): Promise<RouterConfig[]> => {
//     await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay

//     const routesConfig: Record<string, RouterConfig[]> = {
//       admin: [
//         { path: '/', name: '首页', component: Home },
//         { path: '/Home', name: 'Home', component: Home },
//         { path: '/Inbox', name: 'Inbox', component: Inbox },
//         { path: '/Search', name: 'Search', component: Search },
//         { path: '/Settings', name: 'Settings', component: Settings },
//         { path: '/Calendar', name: 'Calendar', component: Calendar }
//       ],
//       user: [
//         { path: '/', name: '首页', component: Home },
//         { path: '/Home', name: 'Home', component: Home },
//         { path: '/Inbox', name: 'Inbox', component: Inbox },
//       ]
//     }

//     if(userId == 'admin') return routesConfig.admin
//     if(userId == 'user') return routesConfig.user
//     return []

//   }
// }

// const build = (routers: RouterConfig[]) => {
//   return routers
// }

// const routers = createBrowserRouter([
//   {
//     path: "/",
//     Component: Layout,
//     children: [
//       { index: true, Component: Home },
//       { path: "Home", Component: Home },
//       { path: "Inbox", Component: Inbox },
//       { path: "Search", Component: Search },
//       { path: "Settings", Component: Settings },
//       { path: "Calendar", Component: Calendar },
//     ],
//   },
//   { path: "*", Component: Page404 },
//   ...commonRouter
// ]);

// const Router = build(routers)

// export default Router