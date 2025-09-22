import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ThemeProvider } from '@/components/common/ThemeProvider/ThemeProvide'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import Navbar from './Navbar/Navbar'
import AppSidebar from './AppSidebar/AppSidebar'
import { Outlet } from 'react-router'
import { mockBackendAPI } from '@/routers'

function Layout({children}: Readonly<{
  children: React.ReactNode;
}>){
  const defaultOpen = localStorage.getItem('sidebar-open') === 'true'

  return (
    <>
      <div className="@container flex w-full" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          className="w-full flex"
        >
          <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar />
            <main className='w-full'>
              <header className='h-[64px]'>
                <Navbar />
              </header>
              <div className="px-4">
                  <Outlet />
              </div>
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </div>
    </>
  )
}

export default Layout
