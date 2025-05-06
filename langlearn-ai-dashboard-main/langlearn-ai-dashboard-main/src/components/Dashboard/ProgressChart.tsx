
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { BaseChart } from "@/components/Charts/BaseChart";
import { ChartDataPoint } from "@/types/chart";

const data: ChartDataPoint[] = [
  { name: "Mon", progress: 65 },
  { name: "Tue", progress: 59 },
  { name: "Wed", progress: 80 },
  { name: "Thu", progress: 81 },
  { name: "Fri", progress: 56 },
  { name: "Sat", progress: 40 },
  { name: "Sun", progress: 30 },
];

export function ProgressChart() {
  return (
    <BaseChart 
      title="Weekly Progress"
      description="Your study hours and engagement this week"
      className="col-span-4"
    >
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid #e2e8f0",
            borderRadius: "0.5rem",
          }}
        />
        <Bar
          dataKey="progress"
          fill="url(#colorGradient)"
          radius={[4, 4, 0, 0]}
          className="animate-fade-in"
        />
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0EA5E9" stopOpacity={1} />
            <stop offset="100%" stopColor="#0EA5E9" stopOpacity={0.6} />
          </linearGradient>
        </defs>
      </BarChart>
    </BaseChart>
  );
}
