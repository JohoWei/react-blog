import { type UserInfo } from '@/modules/user/types/model.types'
import { type RouterConfig } from '@/routers/types/router.type'

export interface UserStore {
  loading?: boolean
  error?: string | null
  token?: string
  userInfo?: UserInfo
  loginName?: string
  roles: RouterConfig[]
  actions: {
    setToken: (token: string) => void
    setUserInfo: (userInfo: UserInfo) => void
    setLoginName: (loginName: string) => void
    setRoles: () => Promise<void>
    clearUserInfoAndToken: () => void
  } 
}