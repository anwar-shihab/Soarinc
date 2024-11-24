"use client"

import { LabelList, Pie, PieChart } from "recharts"

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
  { browser: "Entertaiment", share: 300 , fill: "var(--color-Entertaiment)" },
  { browser: "Investment", share: 200, fill: "var(--color-Investment)" },
  { browser: "Others", share: 187, fill: "var(--color-Others)" },
  { browser: "Bill", share: 173, fill: "var(--color-Bill)" },
]

const sum=chartData.reduce((a,b)=>a+b.share,0)

const chartConfig = {
  share: {
    label: "share",
  },
  Entertaiment: {
    label: `${Math.round((chartData[0].share/sum)*100)}% Entertaiment`,
    color: "hsl(var(--chart-1))",
  },
  Investment: {
    label: `${Math.round((chartData[1].share/sum)*100)}% Investment`,
    color: "hsl(var(--chart-2))",
  },
  Others: {
    label:  `${Math.round((chartData[2].share/sum)*100)}% Others`,
    color: "hsl(var(--chart-3))",
  },
  Bill: {
    label: `${Math.round((chartData[3].share/sum)*100)}% Bill`,
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function PieCharts() {
  return (
    <Card className="flex h-[91%] items-center rounded-3xl md:w-[50%] xl:w-full">
      
      <CardContent className="p-0 flex-1 pb-0 ">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="share" hideLabel />}
            />
            <Pie data={chartData} dataKey="share">
              <LabelList
                dataKey="browser"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig, ) =>
                  `${chartConfig[value]?.label}`
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      
    </Card>
  )
}
