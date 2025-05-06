
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { BaseChart } from "@/components/Charts/BaseChart";
import { ChartDataPoint } from "@/types/chart";

const data: ChartDataPoint[] = [
  { day: "Mon", hours: 2.5 },
  { day: "Tue", hours: 1.8 },
  { day: "Wed", hours: 3.2 },
  { day: "Thu", hours: 2.1 },
  { day: "Fri", hours: 2.8 },
  { day: "Sat", hours: 1.5 },
  { day: "Sun", hours: 0.9 },
];

export function WeeklyProgress() {
  return (
    <BaseChart title="Weekly Study Hours" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="hours" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
      </BarChart>
    </BaseChart>
  );
}
