import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Play,
  Book,
  CheckCircle,
  Clock,
  TrendingUp,
  Package,
  Zap,
} from "lucide-react";

interface Playbook {
  id: string;
  title: string;
  description: string;
  status: "ready" | "running" | "completed";
  type: "optimization" | "automation" | "analysis";
  duration: string;
  impact: string;
}

const playbooks: Playbook[] = [
  {
    id: "1",
    title: "Inventory Optimization",
    description: "Optimize stock levels based on demand forecasting and lead times",
    status: "ready",
    type: "optimization",
    duration: "2-3 hours",
    impact: "Reduce storage costs by up to 25%"
  },
  {
    id: "2",
    title: "Bundle Strategy",
    description: "Create product bundles to increase average order value",
    status: "ready",
    type: "optimization",
    duration: "1-2 hours",
    impact: "Increase revenue by 15-20%"
  },
  {
    id: "3",
    title: "Seasonal Adjustment",
    description: "Adjust inventory levels for upcoming seasonal changes",
    status: "ready",
    type: "analysis",
    duration: "4-5 hours",
    impact: "Improve stock accuracy by 30%"
  },
  {
    id: "4",
    title: "Dead Stock Revival",
    description: "Identify and create strategies for moving dead stock",
    status: "ready",
    type: "optimization",
    duration: "2-3 hours",
    impact: "Convert 40% of dead stock to revenue"
  }
];

export default function Playbooks() {
  const [activePlaybooks, setActivePlaybooks] = useState<string[]>([]);

  const getStatusIcon = (status: Playbook["status"]) => {
    switch (status) {
      case "ready":
        return <Play className="w-4 h-4" />;
      case "running":
        return <Clock className="w-4 h-4 animate-spin" />;
      case "completed":
        return <CheckCircle className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: Playbook["status"]) => {
    switch (status) {
      case "ready":
        return "bg-primary/10 text-primary hover:bg-primary/20";
      case "running":
        return "bg-yellow-500/10 text-yellow-500";
      case "completed":
        return "bg-green-500/10 text-green-500";
    }
  };

  const handlePlaybookAction = (id: string) => {
    if (activePlaybooks.includes(id)) return;

    setActivePlaybooks([...activePlaybooks, id]);
    const playbook = playbooks.find(p => p.id === id);
    
    // Simulate playbook completion
    setTimeout(() => {
      setActivePlaybooks(current => current.filter(pid => pid !== id));
      const playbookElement = document.getElementById(`playbook-${id}`);
      if (playbookElement) {
        playbookElement.classList.add("completed");
      }
    }, 5000);
  };

  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Playbooks</h1>
          <p className="text-muted-foreground mt-1">
            Automated workflows to optimize your inventory management
          </p>
        </div>

        {/* Playbooks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {playbooks.map((playbook) => (
            <Card
              key={playbook.id}
              id={`playbook-${playbook.id}`}
              className="p-6 bg-gradient-card border-border/50 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge
                    variant="outline"
                    className={getStatusColor(
                      activePlaybooks.includes(playbook.id) ? "running" : "ready"
                    )}
                  >
                    <span className="flex items-center gap-1.5">
                      {getStatusIcon(
                        activePlaybooks.includes(playbook.id) ? "running" : "ready"
                      )}
                      {activePlaybooks.includes(playbook.id) ? "Running" : "Ready"}
                    </span>
                  </Badge>
                  <Badge variant="outline" className="border-border/50">
                    {playbook.type}
                  </Badge>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {playbook.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {playbook.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      Duration: {playbook.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      Expected Impact: {playbook.impact}
                    </span>
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-primary hover:opacity-90"
                  onClick={() => handlePlaybookAction(playbook.id)}
                  disabled={activePlaybooks.includes(playbook.id)}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Run Playbook
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
