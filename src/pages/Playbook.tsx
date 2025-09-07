import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PlaybookItem {
  id: string;
  name: string;
  trigger: string;
  actions: string;
  enabled: boolean;
  lastRun?: string;
}

const initialPlaybooks: PlaybookItem[] = [
  { id: "pb-1", name: "Restock Critical Items", trigger: "Low stock + lead time", actions: "Create PO, Notify buyer", enabled: true, lastRun: "2 hours ago" },
  { id: "pb-2", name: "Clear Slow-Moving", trigger: "90 days unsold", actions: "Create discount campaign", enabled: false, lastRun: "3 days ago" },
  { id: "pb-3", name: "Promote Top Sellers", trigger: "Top growth category", actions: "Feature on homepage", enabled: true, lastRun: "1 day ago" },
];

export default function Playbook() {
  const [playbooks] = useState<PlaybookItem[]>(initialPlaybooks);

  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Playbook</h1>
            <p className="text-muted-foreground mt-1">Create and manage operational playbooks for automating inventory actions.</p>
          </div>
          <Button className="bg-gradient-primary">New Playbook</Button>
        </div>

        <Card className="bg-gradient-card border-border/50 p-4">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50 text-xs text-muted-foreground uppercase tracking-wider">
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Trigger</th>
                  <th className="px-4 py-3 text-left">Actions</th>
                  <th className="px-4 py-3 text-left">Last Run</th>
                  <th className="px-4 py-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {playbooks.map((p) => (
                  <tr key={p.id} className="border-b border-border/20 hover:bg-muted/20">
                    <td className="px-4 py-3 text-sm font-medium">{p.name}</td>
                    <td className="px-4 py-3 text-sm">{p.trigger}</td>
                    <td className="px-4 py-3 text-sm">{p.actions}</td>
                    <td className="px-4 py-3 text-sm">{p.lastRun || '-'}</td>
                    <td className="px-4 py-3">
                      <Badge variant={p.enabled ? 'secondary' : 'outline'} className="text-xs">
                        {p.enabled ? 'Enabled' : 'Disabled'}
                      </Badge>
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
