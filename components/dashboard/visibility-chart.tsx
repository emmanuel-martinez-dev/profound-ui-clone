"use client"

import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts'

const data = [
  { date: 'Jan 29', value: 85 },
  { date: 'Jan 30', value: 88 },
  { date: 'Jan 31', value: 82 },
  { date: 'Feb 01', value: 89 },
  { date: 'Feb 02', value: 91 },
  { date: 'Feb 03', value: 87 },
  { date: 'Feb 04', value: 90 }
]

export function VisibilityChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 10,
          }}
        >
          <defs>
            <linearGradient id="colorSuccess" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="rgb(34, 197, 94)" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="rgb(34, 197, 94)" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="rgba(255, 255, 255, 0.1)"
            horizontal={true}
            vertical={false}
          />
          <XAxis 
            dataKey="date" 
            axisLine={false}
            tickLine={false}
            tick={{ 
              fill: 'var(--text-muted)', 
              fontSize: 12 
            }}
            dy={10}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ 
              fill: 'var(--text-muted)', 
              fontSize: 12 
            }}
            domain={[0, 100]}
            tickFormatter={(value) => `${value}%`}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="rgb(34, 197, 94)"
            strokeWidth={2}
            fill="url(#colorSuccess)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
} 