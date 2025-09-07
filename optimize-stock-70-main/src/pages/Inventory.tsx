import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Filter,
  Plus,
  Download,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

interface InventoryItem {
  id: string;
  product: string;
  sku: string;
  stock: number;
  daysInStock: number;
  salesRate: string;
  blockedCash: number;
  riskLevel: "Low" | "Medium" | "High" | "Critical";
  predictiveFlags: string;
}

const inventoryData: InventoryItem[] = [
  {
    id: "1",
    product: "Eco-Friendly Bamboo Toothbrushes",
    sku: "TB-001",
    stock: 1500,
    daysInStock: 30,
    salesRate: "50/day",
    blockedCash: 7500,
    riskLevel: "Low",
    predictiveFlags: "-",
  },
  {
    id: "2",
    product: "Organic Cotton T-Shirts",
    sku: "TS-002",
    stock: 800,
    daysInStock: 60,
    salesRate: "20/day",
    blockedCash: 4000,
    riskLevel: "Medium",
    predictiveFlags: "⚠️ Unsold for 60 days",
  },
  {
    id: "3",
    product: "Recycled Paper Notebooks",
    sku: "NB-003",
    stock: 2000,
    daysInStock: 15,
    salesRate: "100/day",
    blockedCash: 10000,
    riskLevel: "Low",
    predictiveFlags: "-",
  },
  {
    id: "4",
    product: "Stainless Steel Water Bottles",
    sku: "WB-004",
    stock: 500,
    daysInStock: 90,
    salesRate: "5/day",
    blockedCash: 2500,
    riskLevel: "High",
    predictiveFlags: "🔺 Unsold for 90 days",
  },
  {
    id: "5",
    product: "Reusable Shopping Bags",
    sku: "SB-005",
    stock: 1200,
    daysInStock: 45,
    salesRate: "30/day",
    blockedCash: 6000,
    riskLevel: "Medium",
    predictiveFlags: "-",
  },
  {
    id: "6",
    product: "Solar-Powered Phone Chargers",
    sku: "PC-006",
    stock: 300,
    daysInStock: 120,
    salesRate: "2/day",
    blockedCash: 1500,
    riskLevel: "High",
    predictiveFlags: "🔺 Unsold for 120 days",
  },
  {
    id: "7",
    product: "Biodegradable Phone Cases",
    sku: "BC-007",
    stock: 1000,
    daysInStock: 20,
    salesRate: "40/day",
    blockedCash: 5000,
    riskLevel: "Low",
    predictiveFlags: "-",
  },
  {
    id: "8",
    product: "Bamboo Cutting Boards",
    sku: "CB-008",
    stock: 400,
    daysInStock: 75,
    salesRate: "8/day",
    blockedCash: 2000,
    riskLevel: "Medium",
    predictiveFlags: "⚠️ Unsold for 75 days",
  },
];

export default function Inventory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRisk, setSelectedRisk] = useState("all");

  const getRiskBadgeVariant = (risk: InventoryItem["riskLevel"]) => {
    switch (risk) {
      case "Critical":
        return "destructive";
      case "High":
        return "default";
      case "Medium":
        return "secondary";
      case "Low":
        return "outline";
      default:
        return "secondary";
    }
  };

  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Inventory Overview</h1>
            <p className="text-muted-foreground mt-1">
              Manage your product inventory effectively with real-time data and predictive insights
            </p>
          </div>
          <Button className="bg-gradient-primary hover:opacity-90">
            <Plus className="w-4 h-4 mr-2" />
            Add Product
          </Button>
        </div>

        {/* Filters */}
        <Card className="p-4 bg-gradient-card border-border/50">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 bg-muted/30 border-border/50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px] bg-muted/30 border-border/50">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="personal-care">Personal Care</SelectItem>
                <SelectItem value="apparel">Apparel</SelectItem>
                <SelectItem value="accessories">Accessories</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="home">Home & Living</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedRisk} onValueChange={setSelectedRisk}>
              <SelectTrigger className="w-[180px] bg-muted/30 border-border/50">
                <SelectValue placeholder="Risk Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Risk Levels</SelectItem>
                <SelectItem value="low">Low Risk</SelectItem>
                <SelectItem value="medium">Medium Risk</SelectItem>
                <SelectItem value="high">High Risk</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </Card>

        {/* Inventory Table */}
        <Card className="bg-gradient-card border-border/50">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Stock
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Days in Stock
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Sales Rate
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Blocked Cash
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Risk Level
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Predictive Flags
                  </th>
                </tr>
              </thead>
              <tbody>
                {inventoryData.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-border/30 hover:bg-muted/20 transition-colors cursor-pointer"
                  >
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-foreground">
                          {item.product}
                        </div>
                        <div className="text-xs text-muted-foreground">{item.sku}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-foreground">
                          {item.stock.toLocaleString()}
                        </span>
                        {item.stock < 500 && (
                          <AlertTriangle className="w-4 h-4 text-warning" />
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-foreground">{item.daysInStock}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <span className="text-sm text-foreground">{item.salesRate}</span>
                        {parseInt(item.salesRate) > 50 ? (
                          <TrendingUp className="w-4 h-4 text-success" />
                        ) : parseInt(item.salesRate) < 10 ? (
                          <TrendingDown className="w-4 h-4 text-destructive" />
                        ) : null}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-foreground">
                        ₹{(item.blockedCash * 83).toLocaleString()}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <Badge
                        variant={getRiskBadgeVariant(item.riskLevel)}
                        className="text-xs"
                      >
                        {item.riskLevel}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-muted-foreground">
                        {item.predictiveFlags}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
}