"use client"

import { cn } from "@/lib/utils"
import { 
  Home, 
  Search, 
  Inbox, 
  Building2, 
  MessageSquare, 
  Cpu, 
  Quote, 
  TrendingUp,
  Menu,
  X
} from "lucide-react"
import { useState } from "react"

interface SidebarProps {
  className?: string
}

const navigation = [
  {
    name: "Home",
    icon: Home,
    href: "/",
    current: true
  },
  {
    name: "Search",
    icon: Search,
    href: "/search",
    current: false
  },
  {
    name: "Inbox",
    icon: Inbox,
    href: "/inbox",
    current: false
  }
]

const metricsNavigation = [
  {
    name: "Industry",
    icon: Building2,
    href: "/industry",
    current: false
  },
  {
    name: "Topic",
    icon: MessageSquare,
    href: "/topic",
    current: false
  },
  {
    name: "Model",
    icon: Cpu,
    href: "/model",
    current: false
  },
  {
    name: "Citation",
    icon: Quote,
    href: "/citation",
    current: false
  },
  {
    name: "Improve",
    icon: TrendingUp,
    href: "/improve",
    current: false
  }
]

export function Sidebar({ className }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md bg-surface border border-border text-text-secondary hover:text-text-primary hover:bg-surface-elevated transition-colors"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-40 w-[280px] bg-surface border-r border-border transform transition-transform duration-200 ease-in-out lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full",
        className
      )}>
        <div className="flex flex-col h-full p-6">
          {/* Logo */}
          <div className="flex items-center mb-8">
            <div className="w-6 h-6 bg-text-primary rounded-sm flex items-center justify-center">
              <span className="text-background font-bold text-sm">R</span>
            </div>
            <span className="ml-2 text-text-primary font-medium">Rho</span>
          </div>

          {/* Primary Navigation */}
          <nav className="flex-1">
            <ul className="space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={cn(
                      "flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer",
                      item.current
                        ? "bg-surface-elevated text-text-primary"
                        : "text-text-secondary hover:text-text-primary hover:bg-white/5"
                    )}
                  >
                    <item.icon className="w-4 h-4 mr-3" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Metrics Section */}
            <div className="mt-8">
              <h3 className="px-4 text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                Metrics
              </h3>
              <ul className="space-y-1">
                {metricsNavigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={cn(
                        "flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer",
                        item.current
                          ? "bg-surface-elevated text-text-primary"
                          : "text-text-secondary hover:text-text-primary hover:bg-white/5"
                      )}
                    >
                      <item.icon className="w-4 h-4 mr-3" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
} 