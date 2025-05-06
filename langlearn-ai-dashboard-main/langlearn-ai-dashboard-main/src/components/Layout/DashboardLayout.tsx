
import { ReactNode } from "react";
import { Sidebar, SidebarProvider, SidebarTrigger, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { BookOpen, Home, BarChart, Book, Calendar, User, Search, Settings } from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar>
          <SidebarContent>
            <div className="px-4 py-3">
              <h2 className="text-lg font-semibold text-education-primary tracking-tight">LangLearn</h2>
              <p className="text-xs text-muted-foreground">Adaptive learning platform</p>
            </div>
            
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/" className="flex items-center gap-x-2 font-medium">
                        <Home className="h-4 w-4" />
                        <span>Dashboard</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/courses" className="flex items-center gap-x-2 font-medium">
                        <BookOpen className="h-4 w-4" />
                        <span>Courses</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/quizzes" className="flex items-center gap-x-2 font-medium">
                        <Book className="h-4 w-4" />
                        <span>Quizzes</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/progress" className="flex items-center gap-x-2 font-medium">
                        <BarChart className="h-4 w-4" />
                        <span>Progress</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/schedule" className="flex items-center gap-x-2 font-medium">
                        <Calendar className="h-4 w-4" />
                        <span>Schedule</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            
            <SidebarGroup>
              <SidebarGroupLabel>User</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/profile" className="flex items-center gap-x-2 font-medium">
                        <User className="h-4 w-4" />
                        <span>Profile</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/search" className="flex items-center gap-x-2 font-medium">
                        <Search className="h-4 w-4" />
                        <span>Search</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/settings" className="flex items-center gap-x-2 font-medium">
                        <Settings className="h-4 w-4" />
                        <span>Settings</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        
        <div className="flex-1 p-6">
          <header className="flex justify-between items-center mb-6">
            <div>
              <SidebarTrigger />
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-muted-foreground">Welcome, Student</div>
              <div className="h-8 w-8 rounded-full bg-education-primary text-white flex items-center justify-center">
                <span className="text-xs font-medium">S</span>
              </div>
            </div>
          </header>
          
          <main>{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
