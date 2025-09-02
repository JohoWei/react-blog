import { useState } from 'react'
import '@/styles/App.css'
import { Button } from '@/components/ui/button'
import { ThemeProvider } from '@/components/common/ThemeProvider/ThemeProvide'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import Navbar from '@/components/common/Navbar/Navbar'
import AppSidebar from '@/components/common/AppSidebar/AppSidebar'

function App({children}: Readonly<{
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
              <header>
                <Navbar />
              </header>
              <div className="px-4">
                  {children}
                </div>
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </div>
    </>
  )
}

export default App
