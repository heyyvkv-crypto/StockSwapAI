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
  image?: string;
  predictiveFlags: string;
}

const inventoryData: InventoryItem[] = [
  {
    id: "1",
    product: "Eco-Friendly Bamboo Toothbrushes",
  image: "/images/shopping.webp",
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
  image: "/images/cotton_tshirt.webp",
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
  image: "/images/Recycle_Notebook_.jpg",
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
  image: "/images/stainlessSteelBottle.webp",
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
  image: "/images/Shopping_Bag.webp",
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
  image: "/images/solarcharger.webp",
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
  image: "/images/shopping.webp",
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
  image: "/images/cutting board.jpg",
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

        {/* Inventory Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {inventoryData.map((item, idx) => (
            <Card
              key={item.id}
              className={`overflow-hidden relative p-0 group hover:shadow-lg transition-shadow cursor-pointer ${
                // make some cards span two columns for a bento feel
                idx % 7 === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="flex flex-col sm:flex-row lg:flex-col h-full">
                <div className="relative w-full lg:h-40 sm:h-28 h-40 flex-shrink-0 bg-muted/10">
                  <img
                    src={item.image ?? "/placeholder.svg"}
                    alt={item.product}
                    loading="lazy"
                    onError={(e) => {
                      // fallback to placeholder if image fails to load
                      (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                    }}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 left-2">
                    <Badge variant={getRiskBadgeVariant(item.riskLevel)} className="text-xs">
                      {item.riskLevel}
                    </Badge>
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-sm font-semibold text-foreground">{item.product}</div>
                    <div className="text-xs text-muted-foreground">{item.sku}</div>
                    <div className="mt-2 text-sm text-foreground">Stock: {item.stock.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">{item.predictiveFlags}</div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-sm font-medium text-foreground">₹{item.blockedCash.toLocaleString()}</div>
                    <div className="flex items-center gap-2">
                      <div className="text-xs text-muted-foreground">{item.salesRate}</div>
                      {item.stock < 500 && <AlertTriangle className="w-4 h-4 text-warning" />}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}