import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  BarChart3,
  Settings,
  MessageSquare,
  Zap,
  AlertTriangle,
  BookOpen,
  FlaskConical
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigation = [
  { title: "Dashboard", href: "/", icon: LayoutDashboard },
  { title: "Inventory", href: "/inventory", icon: Package },
  { title: "Analytics", href: "/analytics", icon: BarChart3 },
  { title: "Playbooks", href: "/playbooks", icon: BookOpen },
  { title: "Simulator", href: "/simulator", icon: FlaskConical },
];

const integrations = [
  { title: "AI Assistant", href: "/ai-assistant", icon: MessageSquare },
  { title: "Automations", href: "/automations", icon: Zap },
  { title: "Orders", href: "/orders", icon: ShoppingCart },
  { title: "Settings", href: "/settings", icon: Settings },
];

export function AppSidebar() {
  const location = useLocation();
  const { open } = useSidebar();

  return (
    <Sidebar className="border-r border-border/50" collapsible="icon">
      <SidebarContent className="bg-sidebar">
        <div className="p-4 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Package className="w-6 h-6 text-primary-foreground" />
            </div>
            {open && (
              <div>
                <h2 className="font-bold text-lg">StockFlow</h2>
                <p className="text-xs text-muted-foreground">AI Inventory Manager</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground">
            Main
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                          isActive
                            ? "bg-primary/10 text-primary font-medium"
                            : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                        }`
                      }
                    >
                      <item.icon className="w-5 h-5" />
                      {open && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground">
            Tools & Settings
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {integrations.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                          isActive
                            ? "bg-primary/10 text-primary font-medium"
                            : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                        }`
                      }
                    >
                      <item.icon className="w-5 h-5" />
                      {open && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}