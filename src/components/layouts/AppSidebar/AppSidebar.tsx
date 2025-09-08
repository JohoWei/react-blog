import { 
    Sidebar, 
    SidebarContent, 
    SidebarFooter, 
    SidebarGroup, 
    SidebarGroupAction, 
    SidebarGroupContent, 
    SidebarGroupLabel, 
    SidebarHeader, 
    SidebarMenu, 
    SidebarMenuButton, 
    SidebarMenuItem, 
    SidebarSeparator 
} from '@/components/ui/sidebar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Home, Inbox, Calendar, Search, Settings, User2, ChevronUp, Plus, Projector } from 'lucide-react'
import { NavLink } from 'react-router'
import Router from '@/routers'
import React, { useEffect } from 'react'

const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home
  },
  {
    title: 'Inbox',
    url: '/Inbox',
    icon: Inbox
  },
  {
    title: 'Calendar',
    url: '/Calendar',
    icon: Calendar
  },
  {
    title: 'Search',
    url: '/Search',
    icon: Search
  },
  {
    title: "Settings",
    url: "/Settings",
    icon: Settings,
  },
]

export default function AppSidebar() {
    const [authItems, setAuthItems] = React.useState<any[]>([])

    useEffect(() => {
        const nextAuthItems = []
        items.filter(item => {
            Router.routes[0].children?.map(router => {
                if(router.path == item.title) {
                    nextAuthItems.push(item)
                }
            })
        })
        setAuthItems(nextAuthItems)
    }, [Router.routes])

  return (
    <>
      <Sidebar collapsible='icon'>
          <SidebarHeader className='py-4'>
              <SidebarMenu>
                  <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                          <a href="/">
                              <span>Lama Dev</span>
                          </a>
                      </SidebarMenuButton>
                  </SidebarMenuItem>
              </SidebarMenu>
          </SidebarHeader>
          <SidebarSeparator></SidebarSeparator>
          <SidebarContent>
              <SidebarGroup>
                  <SidebarGroupLabel>Application</SidebarGroupLabel>
                  <SidebarGroupContent>
                      <SidebarMenu>
                          {authItems.map((item) =>(
                              <SidebarMenuItem key={item.title}>
                                  <SidebarMenuButton asChild>
                                    <NavLink  to={item.url}>
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </NavLink>
                                  </SidebarMenuButton>
                              </SidebarMenuItem>
                          ))}
                      </SidebarMenu>
                  </SidebarGroupContent>
              </SidebarGroup>
              <SidebarGroup>
                  <SidebarGroupLabel>Projects</SidebarGroupLabel>
                      <SidebarGroupAction title="Add Project">
                          <Plus /> <span className="sr-only">Add Project</span>
                      </SidebarGroupAction>
                      <SidebarGroupContent>
                          <SidebarMenu>
                              <SidebarMenuItem>
                                  <SidebarMenuButton asChild>
                                      <NavLink  to="/dashboard">
                                          <Projector></Projector>
                                          See All Projects
                                      </NavLink>
                                  </SidebarMenuButton>
                              </SidebarMenuItem>
                          </SidebarMenu>
                      </SidebarGroupContent>
              </SidebarGroup>
          </SidebarContent>
          <SidebarFooter >
              <SidebarMenu>
                  <SidebarMenuItem>
                      <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                              <SidebarMenuButton>
                                  <   ></>
                                  Joho
                                  <ChevronUp className='ml-auto'></ChevronUp>
                              </SidebarMenuButton>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align='end'>
                              <DropdownMenuItem>Account</DropdownMenuItem>
                              <DropdownMenuItem>Setting</DropdownMenuItem>
                              <DropdownMenuItem>Sign out</DropdownMenuItem>
                          </DropdownMenuContent>
                      </DropdownMenu>
                  </SidebarMenuItem>
              </SidebarMenu>
          </SidebarFooter>
      </Sidebar> 
    </>
       
  )
}