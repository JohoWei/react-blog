import { createContext } from "react";
import { createBrowserRouter, type RouteObject } from "react-router";
import { type RouterConfig } from "./types/router.type";
import commonRouter from "./commonRouter";
import Layout from "@/components/layouts";
import Page404 from '@/modules/System/pages/404';

// import Home from "@/modules/Home/pages";
// import Inbox from "@/modules/Inbox/pages";
// import Search from "@/modules/Search/pages";
// import Settings from "@/modules/Settings/pages";
// import Calendar from "@/modules/Calendar/pages";


interface AuthContextType {
  user: User | null;
  routes: RouteConfig[];
  loading: boolean;
  login: (username: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

// 创建认证上下文
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const mockBackendAPI = {
  getUserRoutes: async (userId: string): Promise<RouterConfig[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay

    const routesConfig: Record<string, RouterConfig[]> = {
      admin: [
        { index: true,  name: '首页', filePath: '/Home/pages/index.tsx' },
        { path: 'Home', name: '首页', filePath: '/Home/pages/index.tsx' },
        { path: 'Inbox',  name: 'Inbox', filePath: '/Inbox/pages/index.tsx' },
        { path: 'Search',  name: 'Search', filePath: '/Search/pages/index.tsx' },
        { path: 'Settings',  name: 'Setting', filePath: '/Settings/pages/index.tsx' },
        { path: 'Calendar',  name: 'Calendar', filePath: '/Calendar/pages/index.tsx' },
        { path: 'Medicine',  name: 'Medicine', filePath: '/Medicine/pages/index.tsx' },
      ],
      user: [
        { index: true,  name: '首页', filePath: '/Home/pages/index.tsx' },
        { path: 'Home', name: '首页', filePath: '/Home/pages/index.tsx' },
        { path: 'Inbox',  name: 'Inbox', filePath: '/Inbox/pages/index.tsx' },
      ]
    }

    if(userId == 'admin') return routesConfig.admin
    if(userId == 'user') return routesConfig.user
    return []

  }
}

// 获取modules下所有文件
const modules = import.meta.glob('/src/modules/**/index.tsx', { eager: true, import: 'default' })
// 将文件路径映射到组件
const components = Object.keys(modules).reduce<Record<string, any>>((prev, cur) => {
  prev[cur.replace('/src/modules', '')] = (modules as any)[cur]
  return prev
}, {}) as Record<string, any>

// 动态构建路由
const build = async (routers: RouterConfig[]) => {
  try{
    // 根据用户角色获取路由
    await mockBackendAPI.getUserRoutes('admin').then(adminRoutes => {
      // 获取到路由后，动态设置路由组件
      routers[0].children = adminRoutes.map((routes: any) => ({
        ...routes,
        Component: components[routes.filePath]
      }))
    })
    // 返回路由对象
    return createBrowserRouter(routers)
    
  }catch(error){
    console.error("Error fetching user routes:", error);
  }
}

const routers = [
  {
    path: "/",
    Component: Layout,
    children: [],
  },
  { path: "*", Component: Page404 },
  ...commonRouter
]

const Router = await build(routers)
console.log(Router)

export default Router