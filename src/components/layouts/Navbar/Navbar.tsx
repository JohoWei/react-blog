import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LogOut, Moon, Settings, Sun, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/common/ModeToggle/ModeToggle'
import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar'
import React from 'react'


export default function Navbar() {
  const { open } = useSidebar()
  localStorage.setItem('sidebar-open', open.toString())

  return (
    <nav className="p-4 flex items-center justify-between">
      {/* LEFT */}
      <SidebarTrigger></SidebarTrigger>
      {/* RIGHT */}
      <div className='flex items-center p-4 gap-4'>
        <a href="#/">DashBoard</a>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <ModeToggle />
          </DropdownMenuTrigger>
        </DropdownMenu>
        {/* USER MENU */}
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src="https://avatar.githubusercontent.com/u/1486366" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={10}>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <User className="h-[1.2rem]! w-[1.2rem]! mr-2"></User>
                    Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Settings className="h-[1.2rem]! w-[1.2rem]! mr-2"></Settings>
                    Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <LogOut className="h-[1.2rem]! w-[1.2rem]! mr-2"></LogOut>
                    LogOut
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
    </nav>
  )
}
