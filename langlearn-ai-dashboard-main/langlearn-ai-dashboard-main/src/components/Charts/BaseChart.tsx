
import React, { ReactElement } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BaseChartProps {
  title: string;
  children: ReactElement;
  height?: number;
  className?: string;
}

export function BaseChart({ title, children, height = 300, className }: BaseChartProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ height: height, width: "100%" }}>
          {children}
        </div>
      </CardContent>
    </Card>
  );
}
