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




const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home
  },
  {
    title: 'Inbox',
    url: '/firstPost',
    icon: Inbox
  },
  {
    title: 'Calendar',
    url: '#',
    icon: Calendar
  },
  {
    title: 'Search',
    url: '#',
    icon: Search
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]


export default function AppSidebar() {
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
                          {items.map((item) =>(
                              <SidebarMenuItem key={item.title}>
                                  <SidebarMenuButton asChild>
                                      <a href={item.url}>
                                          <item.icon />
                                          <span>{item.title}</span>
                                      </a>
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
                                      <a href="/#">
                                          <Projector></Projector>
                                          See All Projects
                                      </a>
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