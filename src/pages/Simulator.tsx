import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Play,
  RefreshCw,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Package,
  AlertCircle,
  ChevronRight,
} from "lucide-react";

interface SimulationResult {
  marginPercentage: number;
  marginValue: number;
  marginChange: number;
  storageCost: number;
  storageChange: number;
  cashFlow: number;
  cashFlowChange: number;
}

export default function Simulator() {
  const [newPrice, setNewPrice] = useState("100");
  const [bundleSize, setBundleSize] = useState([2]);
  const [selectedProduct, setSelectedProduct] = useState("wireless-headphones");
  const [simulationDate, setSimulationDate] = useState("2024-07-26");
  const [isSimulating, setIsSimulating] = useState(false);
  const [results, setResults] = useState<SimulationResult | null>(null);

  const handleSimulate = () => {
    setIsSimulating(true);
    
    // Simulate API call
    setTimeout(() => {
      setResults({
        marginPercentage: 25,
        marginValue: 11500,
        marginChange: 5,
        storageCost: 500,
        storageChange: -100,
        cashFlow: 1200,
        cashFlowChange: 20,
      });
      setIsSimulating(false);
    }, 1500);
  };

  const handleReset = () => {
    setNewPrice("100");
    setBundleSize([2]);
    setSelectedProduct("wireless-headphones");
    setSimulationDate("2024-07-26");
    setResults(null);
  };

  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Scenario Simulator</h1>
          <p className="text-muted-foreground mt-1">
            Simulate changes to pricing and bundles to understand their impact on your business
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Parameters */}
          <Card className="p-6 bg-gradient-card border-border/50">
            <h2 className="text-lg font-semibold text-foreground mb-6">
              Input Parameters
            </h2>
            
            <div className="space-y-6">
              {/* Product Selection */}
              <div>
                <Label htmlFor="product">Product</Label>
                <Select value={selectedProduct} onValueChange={setSelectedProduct}>
                  <SelectTrigger className="mt-2 bg-muted/30 border-border/50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wireless-headphones">
                      Wireless Headphones
                    </SelectItem>
                    <SelectItem value="organic-cotton-tshirts">
                      Organic Cotton T-Shirts
                    </SelectItem>
                    <SelectItem value="bamboo-toothbrushes">
                      Eco-Friendly Bamboo Toothbrushes
                    </SelectItem>
                    <SelectItem value="yoga-mats">Sustainable Yoga Mats</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* New Price */}
              <div>
                <Label htmlFor="price">New Price</Label>
                  <div className="mt-2 relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground text-sm">₹</span>
                  <Input
                    id="price"
                    type="number"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    className="pl-10 bg-muted/30 border-border/50"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">Current price: ₹100</p>
              </div>

              {/* Bundle Size */}
              <div>
                <Label>Bundle Size</Label>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Units per bundle</span>
                    <span className="text-sm font-medium">{bundleSize[0]}</span>
                  </div>
                  <Slider
                    value={bundleSize}
                    onValueChange={setBundleSize}
                    min={1}
                    max={10}
                    step={1}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Simulation Date */}
              <div>
                <Label htmlFor="date">Simulation Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={simulationDate}
                  onChange={(e) => setSimulationDate(e.target.value)}
                  className="mt-2 bg-muted/30 border-border/50"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleSimulate}
                  disabled={isSimulating}
                  className="flex-1 bg-gradient-primary hover:opacity-90"
                >
                  {isSimulating ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Simulating...
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Simulate
                    </>
                  )}
                </Button>
                <Button onClick={handleReset} variant="outline">
                  Reset
                </Button>
              </div>
            </div>
          </Card>

          {/* Scenario Results */}
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-card border-border/50">
              <h2 className="text-lg font-semibold text-foreground mb-4">
                Scenario Details
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <span className="text-sm text-muted-foreground">Product</span>
                  <span className="text-sm font-medium">Wireless Headphones</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <span className="text-sm text-muted-foreground">Current Price</span>
                  <span className="text-sm font-medium">₹100</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <span className="text-sm text-muted-foreground">Current Bundle Size</span>
                  <span className="text-sm font-medium">1</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <span className="text-sm text-muted-foreground">Simulation Date</span>
                  <span className="text-sm font-medium">July 26, 2024</span>
                </div>
              </div>
            </Card>

            {results && (
              <Card className="p-6 bg-gradient-card border-border/50">
                <h2 className="text-lg font-semibold text-foreground mb-4">
                  Scenario Results
                </h2>
                
                <div className="space-y-4">
                  {/* Margin Percentage */}
                  <div className="p-4 rounded-lg bg-muted/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">
                        Margin Percentage
                      </span>
                      <Badge
                        variant={results.marginChange > 0 ? "default" : "destructive"}
                        className="text-xs"
                      >
                        {results.marginChange > 0 ? (
                          <TrendingUp className="w-3 h-3 mr-1" />
                        ) : (
                          <TrendingDown className="w-3 h-3 mr-1" />
                        )}
                        {results.marginChange > 0 ? "+" : ""}{results.marginChange}%
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      {results.marginPercentage}%
                    </div>
                  </div>

                  {/* Storage Cost */}
                  <div className="p-4 rounded-lg bg-muted/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Storage Cost</span>
                      <Badge
                        variant={results.storageChange < 0 ? "default" : "destructive"}
                        className="text-xs"
                      >
                        {results.storageChange < 0 ? (
                          <TrendingDown className="w-3 h-3 mr-1" />
                        ) : (
                          <TrendingUp className="w-3 h-3 mr-1" />
                        )}
                        {results.storageChange}%
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      ₹{results.storageCost.toLocaleString()}
                    </div>
                  </div>

                  {/* Cash Flow Impact */}
                  <div className="p-4 rounded-lg bg-muted/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">
                        Cash Flow Impact
                      </span>
                      <Badge
                        variant={results.cashFlowChange > 0 ? "default" : "destructive"}
                        className="text-xs"
                      >
                        {results.cashFlowChange > 0 ? (
                          <TrendingUp className="w-3 h-3 mr-1" />
                        ) : (
                          <TrendingDown className="w-3 h-3 mr-1" />
                        )}
                        +{results.cashFlowChange}%
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      ₹{results.cashFlow.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-primary mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-primary">
                        Recommendation
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        This scenario shows positive impact on margins with reduced storage costs. Consider implementing this pricing strategy.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>

        {/* Compare Scenarios */}
        <Card className="p-6 bg-gradient-card border-border/50">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">
              Before vs. After Scenario Comparison
            </h2>
            <Button variant="ghost" size="sm" className="text-primary">
              View Details
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">Before</h3>
                <div className="space-y-2">
                <div className="flex justify-between p-3 rounded-lg bg-muted/20">
                  <span className="text-sm">Revenue</span>
                  <span className="text-sm font-medium">₹11,500</span>
                </div>
                <div className="flex justify-between p-3 rounded-lg bg-muted/20">
                  <span className="text-sm">Margin</span>
                  <span className="text-sm font-medium">20%</span>
                </div>
                <div className="flex justify-between p-3 rounded-lg bg-muted/20">
                  <span className="text-sm">Storage Cost</span>
                  <span className="text-sm font-medium">₹600</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">After</h3>
                <div className="space-y-2">
                <div className="flex justify-between p-3 rounded-lg bg-success/10 border border-success/20">
                  <span className="text-sm">Revenue</span>
                  <span className="text-sm font-medium text-success">₹13,800 (+20%)</span>
                </div>
                <div className="flex justify-between p-3 rounded-lg bg-success/10 border border-success/20">
                  <span className="text-sm">Margin</span>
                  <span className="text-sm font-medium text-success">25% (+5%)</span>
                </div>
                <div className="flex justify-between p-3 rounded-lg bg-success/10 border border-success/20">
                  <span className="text-sm">Storage Cost</span>
                  <span className="text-sm font-medium text-success">₹500 (-16.7%)</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
}