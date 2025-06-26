"use client"

import { TrendingUp, TrendingDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface MetricDisplayProps {
  value: string | number
  label: string
  change?: number
  changeLabel?: string
  className?: string
}

export function MetricDisplay({ 
  value, 
  label, 
  change, 
  changeLabel = "vs last week",
  className 
}: MetricDisplayProps) {
  const isPositive = change !== undefined && change >= 0

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-end gap-3">
        <span className="text-4xl font-bold text-text-primary leading-none">
          {typeof value === 'number' ? `${value}%` : value}
        </span>
        
        {change !== undefined && (
          <div className={cn(
            "flex items-center text-sm font-medium pb-1",
            isPositive ? "text-success" : "text-danger"
          )}>
            {isPositive ? (
              <TrendingUp className="w-4 h-4 mr-1" />
            ) : (
              <TrendingDown className="w-4 h-4 mr-1" />
            )}
            {isPositive ? '+' : ''}{change}% {changeLabel}
          </div>
        )}
      </div>
      
      <p className="text-sm text-text-muted">{label}</p>
    </div>
  )
} 