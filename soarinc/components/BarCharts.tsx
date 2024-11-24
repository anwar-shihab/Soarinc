"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useEffect, useState } from "react"
const chartData = [
  { month: "Sat", Deposit: 450, Withdraw: 250 },
  { month: "Sun", Deposit: 380, Withdraw: 180 },
  { month: "Mon", Deposit: 320, Withdraw: 280 },
  { month: "Tue", Deposit: 480, Withdraw: 380 },
  { month: "Wed", Deposit: 209, Withdraw: 130 },
  { month: "Thu", Deposit: 214, Withdraw: 140 },
  { month: "Fri", Deposit: 186, Withdraw: 80 },
]

const chartConfig = {
  desktop: {
    label: "Deposit",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Withdraw",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const legendItems = [
  { label: 'Deposit', color: 'hsl(var(--chart-2))' },
    { label: 'Withdraw', color: 'hsl(var(--chart-1))' },
  ];

export function BarCharts() {
    const [barSize, setBarSize] = useState(15) 

  useEffect(() => {
   
    const handleResize = () => {
      setBarSize(window.innerWidth >= 1024 ? 15 : 8) 
    }

    handleResize() // Initial check
    window.addEventListener("resize", handleResize)

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return (
    <Card className="w-full rounded-3xl">
      <CardHeader className="p-3 space-y-0 lg:p-8">
        <div className="flex gap-3 justify-end">

        {legendItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <div 
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: item.color }} 
              />
              <span className="text-xs lg:text-sm text-muted-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </CardHeader>
      <CardContent className="p-3">
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}  barSize={barSize}>
            <CartesianGrid vertical={false} />
            <YAxis
              ticks={[0, 100, 200, 300, 400, 500]} 
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              style={{ 'fill': '#718EBF' }}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              style={{'fill': '#718EBF'}}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="Deposit" fill="var(--color-desktop)" radius={[50, 50, 50, 50]} />
            <Bar dataKey="Withdraw" fill="var(--color-mobile)" radius={[50, 50, 50, 50]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
     
    </Card>
  )
}
