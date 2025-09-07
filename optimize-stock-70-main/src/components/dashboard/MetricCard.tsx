import { cn } from "@/lib/utils";
import { ArrowUp, ArrowDown, TrendingUp } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  trend?: "up" | "down" | "neutral";
  subtitle?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function MetricCard({
  title,
  value,
  change,
  trend = "neutral",
  subtitle,
  icon,
  className,
}: MetricCardProps) {
  return (
    <div
      className={cn(
        "relative p-6 rounded-xl bg-gradient-card border border-border/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-all",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold mt-2 text-foreground">{value}</h3>
          
          {change !== undefined && (
            <div className="flex items-center gap-1 mt-2">
              {trend === "up" ? (
                <ArrowUp className="w-4 h-4 text-success" />
              ) : trend === "down" ? (
                <ArrowDown className="w-4 h-4 text-destructive" />
              ) : (
                <TrendingUp className="w-4 h-4 text-muted-foreground" />
              )}
              <span
                className={cn(
                  "text-sm font-medium",
                  trend === "up" && "text-success",
                  trend === "down" && "text-destructive",
                  trend === "neutral" && "text-muted-foreground"
                )}
              >
                {change > 0 ? "+" : ""}{change}%
              </span>
            </div>
          )}
          
          {subtitle && (
            <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
          )}
        </div>
        
        {icon && (
          <div className="p-3 rounded-lg bg-primary/10">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}