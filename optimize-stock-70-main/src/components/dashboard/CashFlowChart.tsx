import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { Card } from "@/components/ui/card";

const data = [
  { month: "Jan", value: 1531350 }, // ₹18,450 * 83
  { month: "Feb", value: 1855050 }, // ₹22,350 * 83
  { month: "Mar", value: 1668300 }, // ₹20,100 * 83
  { month: "Apr", value: 1946350 }, // ₹23,450 * 83
  { month: "May", value: 1743000 }, // ₹21,000 * 83
  { month: "Jun", value: 2124800 }, // ₹25,600 * 83
  { month: "Jul", value: 1946350 }, // ₹23,450 * 83
];

interface CashFlowChartProps {
  title?: string;
  value?: string;
  change?: string;
}

export function CashFlowChart({ 
  title = "Blocked Cash Over Time", 
  value = "₹19,46,350",
  change = "+10%" 
}: CashFlowChartProps) {
  return (
    <Card className="p-6 bg-gradient-card border-border/50">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-3xl font-bold text-foreground">{value}</span>
            <span className="text-sm font-medium text-success">Last 30 Days {change}</span>
          </div>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
          <XAxis 
            dataKey="month" 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "hsl(var(--foreground))" }}
            formatter={(value: any) => [`$${value.toLocaleString()}`, "Cash"]}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="hsl(217, 91%, 60%)"
            strokeWidth={3}
            fill="url(#colorValue)"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}