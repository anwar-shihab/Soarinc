"use client"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(241, 90%, 52%)",
  },
} satisfies ChartConfig

export function LineCharts() {
  return (
    <Card className="bg-background rounded-3xl">
      <CardContent className="pl-0 md:pl-6">
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <defs>
              <linearGradient id="colorDesktopGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(45, 96, 255, 0.25)" />
                <stop offset="100%" stopColor="rgba(45, 96, 255, 0)" />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
                      />
                      <YAxis
              ticks={[0, 200, 400, 600]}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              domain={[0, 700]} 
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#colorDesktopGradient)"
              stroke="hsl(241, 90%, 52%)"
              fillOpacity={1}
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
