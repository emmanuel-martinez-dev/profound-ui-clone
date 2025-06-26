"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight, Settings, MapPin, Filter } from "lucide-react"

interface HeaderProps {
  title?: string
  breadcrumbs?: Array<{ name: string; href?: string }>
}

export function Header({ 
  title = "Home", 
  breadcrumbs = [{ name: "Rho" }, { name: "Home" }] 
}: HeaderProps) {
  return (
    <div className="mb-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-1 text-sm text-text-muted mb-4">
        {breadcrumbs.map((item, index) => (
          <div key={item.name} className="flex items-center">
            {index > 0 && <ChevronRight className="w-4 h-4 mx-1" />}
            {item.href ? (
              <a 
                href={item.href}
                className="hover:text-text-secondary transition-colors"
              >
                {item.name}
              </a>
            ) : (
              <span>{item.name}</span>
            )}
          </div>
        ))}
      </nav>

      {/* Title */}
      <h1 className="text-3xl font-bold text-text-primary mb-8">{title}</h1>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="default" size="sm" className="bg-surface-elevated">
            Last 24 hours
          </Button>
          <Button variant="ghost" size="sm">
            Last 7 days
          </Button>
          <Button variant="ghost" size="sm">
            Last 30 days
          </Button>
          <Button variant="ghost" size="sm">
            Custom range
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button variant="ghost" size="sm" className="flex items-center">
            <Settings className="w-4 h-4 mr-2" />
            All models
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            Region
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>
    </div>
  )
} 