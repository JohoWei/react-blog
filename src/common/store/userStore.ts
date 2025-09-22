import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { type UserStore } from '@/common/types/store.types'
import { mockBackendAPI } from '@/routers'

const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      loading: false,
      error: null,
      token: undefined,
      userInfo: undefined,
      loginName: undefined,
      roles: [],
      actions: {
        setToken: (token: string) => set({ token }),
        setUserInfo: (userInfo: UserInfo) => set({ userInfo }),
        setLoginName: (loginName: string) => set({ loginName }),
        setRoles: async () => {
          set({ loading: true, error: null })
          try {

            const response = await mockBackendAPI.getUserRoutes('admin')
            
            if(response.length === 0) {
              set({ error: 'No routes available for this user.' })
            }

            console.log('获取到的路由数据:', response)
            set({ roles: response, loading: false })

          }catch (error) {
            set({ error: 'Failed to fetch user roles.', loading: false })
          }
        },
        clearUserInfoAndToken: () => set({ token: undefined, userInfo: undefined }),
      }
    }),
    {
        name: 'userStore',
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({
          token: state.token,
          userInfo: state.userInfo,
          loginName: state.loginName,
        }),
      },
  )
)

export default useUserStore
