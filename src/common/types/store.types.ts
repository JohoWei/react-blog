export interface UserStore {
  token?: string
  userInfo?: UserInfo
  loginName?: string
  actions: {
    setToken: (token: string) => void
    setUserInfo: (userInfo: UserInfo) => void
    setLoginName: (loginName: string) => void
    clearUserInfoAndToken: () => void
  } 
}