/**
 * @name 路由配置
 * @param name 配置路由的标题，默认读取国际化文件 menu.ts 中 menu.xxxx 的值， 多级结构则使用一级name.二级name，如配置 name 为 login，则读取 menu.ts 中 menu.login 的取值作为标题
 * @param path  path 注：最後一定要帶/， 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现路由字符串的最后。
 * @param icon 圖標，隻有一級和二級菜單才有圖標
 * @param layout 配置路由的 layout 组件，通常在需要为多个路径增加 layout 组件时使用。
 * @param middlewares 配置路由的中间件，通常在需要为多个路径增加中间件时使用。
 * @param component 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。
 * @param redirect 配置路由跳轉， 當 redirect 有值時， 會跳轉到 redirect 的路由， 並且不會渲染 component 的內容
 * @param routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用。
 * @param permission 權限配置，為空則不判斷權限， 多個權限可以使用数组，如：["system:admin","system:user"]
 * @param hideChildrenInMenu 隱藏子菜單
 * @param hideInMenu 隱藏自己和子菜單
 */
export type RouterConfig = {
  name?: string
  path: string
  icon?: string
  layout?: string
  middlewares?: string | string[]
  component?: string
  redirect?: string
  routes?: RouterConfig[]
  permission?: string | string[]
  hideChildrenInMenu?: boolean
  hideInMenu?: boolean
}
