import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatPercentage(value: number): string {
    return `${value.toFixed(1)}%`
}

export function formatChange(value: number): { text: string; isPositive: boolean } {
    const isPositive = value >= 0
    return {
        text: `${isPositive ? '+' : ''}${value.toFixed(1)}%`,
        isPositive
    }
} 