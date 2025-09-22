import { mockBackendAPI } from '@/routers/index.tsx'
import { RouterProvider } from 'react-router'
import { lazy, useEffect, useState } from 'react'
import '@/styles/App.css'
import Router from '@/routers/index.tsx'
import useUserStore from '@/common/store/userStore'


function App(){
  // const [loading, setLoading] = useState(true)
  const { actions, roles, loading, error } = useUserStore()

  useEffect(() => {
    const loadRoles = async () => {
      await actions.setRoles()
    }
    loadRoles()
  }, [actions])

  // 使用另一个 useEffect 来监听 roles 的变化
  useEffect(() => {
    if (!loading && roles.length > 0) {
      console.log('当前roles:', roles)
    }
  }, [roles, loading])

  if(loading) {
    return <div className='flex justify-center items-center w-full h-full'>Loading...</div>
  }

  // 处理错误状态
  if (error) {
    return (
      <div className="flex flex-col justify-center items-center w-full h-full">
        <h3>❌ 出现错误</h3>
        <p>{error}</p>
      </div>
    )
  }

  return (
    <>
      <RouterProvider router={Router}></RouterProvider>
    </>
  )
}

export default App
