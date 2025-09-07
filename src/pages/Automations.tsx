import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface AutomationRule {
  id: string;
  name: string;
  condition: string;
  action: string;
  enabled: boolean;
}

const sampleRules: AutomationRule[] = [
  { id: 'r1', name: 'Notify Buyer on Low Stock', condition: 'stock < reorder_point', action: 'Send email to buyer', enabled: true },
  { id: 'r2', name: 'Auto-cancel Stale Orders', condition: 'order.pending > 14 days', action: 'Cancel order', enabled: false },
];

export default function Automations() {
  const [rules] = useState<AutomationRule[]>(sampleRules);

  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Automations</h1>
            <p className="text-muted-foreground mt-1">Create rules to automate inventory and order workflows.</p>
          </div>
          <div className="flex items-center gap-2">
            <Input placeholder="Search rules..." className="bg-muted/30 border-border/50" />
            <Button className="bg-gradient-primary">New Rule</Button>
          </div>
        </div>

        <Card className="p-4 bg-gradient-card border-border/50">
          <div className="space-y-3">
            {rules.map((r) => (
              <div key={r.id} className="flex items-center justify-between p-3 border border-border/20 rounded-md">
                <div>
                  <div className="font-medium">{r.name}</div>
                  <div className="text-xs text-muted-foreground">When <code className="bg-muted/20 px-1 rounded">{r.condition}</code> then <code className="bg-muted/20 px-1 rounded">{r.action}</code></div>
                </div>
                <div className="text-sm text-muted-foreground">{r.enabled ? 'Enabled' : 'Disabled'}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppLayout>
  );
}
