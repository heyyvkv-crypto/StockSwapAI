import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  stockLevel: number;
  daysUntilOOS: number;
  riskLevel: "high" | "medium" | "low" | "critical";
}

const products: Product[] = [
  {
    id: "1",
    name: "Eco-Friendly Bamboo Toothbrushes",
    sku: "TB-001",
    category: "Personal Care",
    stockLevel: 500,
    daysUntilOOS: 15,
    riskLevel: "high",
  },
  {
    id: "2",
    name: "Organic Cotton T-Shirts",
    sku: "TS-002",
    category: "Apparel",
    stockLevel: 200,
    daysUntilOOS: 7,
    riskLevel: "critical",
  },
  {
    id: "3",
    name: "Recycled Paper Notebooks",
    sku: "NB-003",
    category: "Stationery",
    stockLevel: 1000,
    daysUntilOOS: 30,
    riskLevel: "medium",
  },
  {
    id: "4",
    name: "Reusable Water Bottles",
    sku: "WB-004",
    category: "Accessories",
    stockLevel: 300,
    daysUntilOOS: 10,
    riskLevel: "high",
  },
  {
    id: "5",
    name: "Sustainable Yoga Mats",
    sku: "YM-005",
    category: "Fitness",
    stockLevel: 100,
    daysUntilOOS: 5,
    riskLevel: "critical",
  },
];

export function AtRiskProducts() {
  const getRiskBadgeVariant = (risk: Product["riskLevel"]) => {
    switch (risk) {
      case "critical":
        return "destructive";
      case "high":
        return "default";
      case "medium":
        return "secondary";
      case "low":
        return "outline";
      default:
        return "secondary";
    }
  };

  const getRiskColor = (risk: Product["riskLevel"]) => {
    switch (risk) {
      case "critical":
        return "text-destructive";
      case "high":
        return "text-warning";
      case "medium":
        return "text-yellow-500";
      case "low":
        return "text-success";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <Card className="bg-gradient-card border-border/50">
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">At-Risk Products</h3>
          <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
            View All
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/50">
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                SKU
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Stock Level
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Days Until OOS
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Risk Level
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b border-border/30 hover:bg-muted/20 transition-colors cursor-pointer"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-foreground">{product.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-muted-foreground">{product.sku}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-muted-foreground">{product.category}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-foreground">
                    {product.stockLevel.toLocaleString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className={`text-sm font-medium ${getRiskColor(product.riskLevel)}`}>
                    {product.daysUntilOOS}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge
                    variant={getRiskBadgeVariant(product.riskLevel)}
                    className="uppercase text-xs"
                  >
                    {product.riskLevel}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}