import Router from '@/routers/index.tsx'
import { RouterProvider } from 'react-router'

function App(){
  return (
    <>
      <RouterProvider router={Router}></RouterProvider>
    </>
  )
}

export default App
