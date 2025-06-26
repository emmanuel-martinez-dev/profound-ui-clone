"use client"

import { TrendingUp, TrendingDown } from "lucide-react"
import { formatChange } from "@/lib/utils"

const brandData = [
  {
    rank: 1,
    name: "Chase",
    icon: "🏦",
    value: 92,
    change: 5,
    color: "chase"
  },
  {
    rank: 2,
    name: "Rho",
    icon: "R",
    value: 89.8,
    change: 1,
    color: "rho"
  },
  {
    rank: 3,
    name: "American Express",
    icon: "💳",
    value: 85.2,
    change: -1,
    color: "american-express"
  },
  {
    rank: 4,
    name: "Capital on Tap",
    icon: "💰",
    value: 78,
    change: 5,
    color: "capital-one"
  },
  {
    rank: 5,
    name: "US bank",
    icon: "🏛️",
    value: 76.9,
    change: -2,
    color: "us-bank"
  },
  {
    rank: 6,
    name: "Bill",
    icon: "💸",
    value: 72.3,
    change: 1.8,
    color: "bill"
  }
]

export function BrandRanking() {
  return (
    <div className="space-y-0">
      {brandData.map((brand) => {
        const change = formatChange(brand.change)
        
        return (
          <div 
            key={brand.name}
            className="flex items-center py-4 border-b border-border last:border-b-0"
          >
            {/* Rank */}
            <div className="w-6 text-center">
              <span className="text-sm font-medium text-text-muted">
                {brand.rank}
              </span>
            </div>

            {/* Icon */}
            <div className="mx-4">
              {brand.icon === "R" ? (
                <div className="w-5 h-5 bg-success rounded-sm flex items-center justify-center">
                  <span className="text-background font-bold text-xs">R</span>
                </div>
              ) : (
                <span className="text-lg">{brand.icon}</span>
              )}
            </div>

            {/* Name */}
            <div className="flex-1">
              <span className="text-sm font-medium text-text-primary">
                {brand.name}
              </span>
            </div>

            {/* Change */}
            <div className="flex items-center mr-4">
              {change.isPositive ? (
                <TrendingUp className="w-3 h-3 text-success mr-1" />
              ) : (
                <TrendingDown className="w-3 h-3 text-danger mr-1" />
              )}
              <span 
                className={`text-xs font-medium ${
                  change.isPositive ? 'text-success' : 'text-danger'
                }`}
              >
                {change.text}
              </span>
            </div>

            {/* Value */}
            <div className="w-12 text-right">
              <span className="text-sm font-semibold text-text-primary">
                {brand.value}%
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
} 