import { mockBackendAPI } from '@/routers/index.tsx'
import { RouterProvider } from 'react-router'
import { lazy, useEffect, useState } from 'react'
import '@/styles/App.css'
import Router from '@/routers/index.tsx'


function App(){
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },1000)

  }, [])

  if(loading) {
    return <div className='flex justify-center items-center w-full h-full'>Loading...</div>
  }

  return (
    <>
      <RouterProvider router={Router}></RouterProvider>
    </>
  )
}

export default App
