import { AppLayout } from "@/components/layout/AppLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { CashFlowChart } from "@/components/dashboard/CashFlowChart";
import { AtRiskProducts } from "@/components/dashboard/AtRiskProducts";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Package, 
  TrendingDown, 
  AlertTriangle,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

const topRiskProducts = [
  { name: "Organic Cotton T-Shirts", status: "Critical", daysLeft: 7 },
  { name: "Sustainable Yoga Mats", status: "Critical", daysLeft: 5 },
  { name: "Eco-Friendly Toothbrushes", status: "High", daysLeft: 15 },
  { name: "Recycled Paper Notebooks", status: "Medium", daysLeft: 30 },
];

export default function Dashboard() {
  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Real-time inventory insights and financial metrics
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Blocked Cash"
            value="₹19,45,350"
            change={10}
            trend="up"
            subtitle="In slow-moving inventory"
            icon={<span className="w-5 h-5 text-primary">₹</span>}
          />
          <MetricCard
            title="Storage Cost"
            value="₹99,600"
            change={-5}
            trend="down"
            subtitle="Monthly warehouse fees"
            icon={<Package className="w-5 h-5 text-primary" />}
          />
          <MetricCard
            title="Margin Impact"
            value="-₹4,65,800"
            change={-8}
            trend="down"
            subtitle="From excess inventory"
            icon={<TrendingDown className="w-5 h-5 text-destructive" />}
          />
          <MetricCard
            title="Out-of-Stock Risk"
            value="15%"
            change={3}
            trend="up"
            subtitle="Products at risk"
            icon={<AlertTriangle className="w-5 h-5 text-warning" />}
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CashFlowChart />
          </div>
          
          {/* Top At-Risk Products Summary */}
          <Card className="p-6 bg-gradient-card border-border/50">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Top At-Risk Products
            </h3>
            <div className="space-y-3">
              {topRiskProducts.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">
                      {product.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {product.daysLeft} days until OOS
                    </p>
                  </div>
                  <Badge
                    variant={
                      product.status === "Critical"
                        ? "destructive"
                        : product.status === "High"
                        ? "default"
                        : "secondary"
                    }
                    className="text-xs"
                  >
                    {product.status}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Detailed At-Risk Products Table */}
        <AtRiskProducts />

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-4 bg-gradient-card border-border/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total SKUs</p>
                <p className="text-2xl font-bold text-foreground mt-1">1,847</p>
              </div>
              <div className="p-2 bg-primary/10 rounded-lg">
                <Package className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div className="flex items-center gap-1 mt-2">
              <ArrowUpRight className="w-4 h-4 text-success" />
              <span className="text-xs text-success">+12% from last month</span>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-card border-border/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Turnover Rate</p>
                <p className="text-2xl font-bold text-foreground mt-1">4.2x</p>
              </div>
              <div className="p-2 bg-success/10 rounded-lg">
                <TrendingDown className="w-5 h-5 text-success" />
              </div>
            </div>
            <div className="flex items-center gap-1 mt-2">
              <ArrowUpRight className="w-4 h-4 text-success" />
              <span className="text-xs text-success">+0.3x improvement</span>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-card border-border/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Dead Stock Value</p>
                <p className="text-2xl font-bold text-foreground mt-1">₹7,39,700</p>
              </div>
              <div className="p-2 bg-destructive/10 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
            </div>
            <div className="flex items-center gap-1 mt-2">
              <ArrowDownRight className="w-4 h-4 text-destructive" />
              <span className="text-xs text-destructive">-5% from target</span>
            </div>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}