import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Settings() {
  const [companyName, setCompanyName] = useState("My Company");
  const [currency, setCurrency] = useState("INR");

  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground mt-1">Application and account configuration.</p>
        </div>

        <Card className="p-4 bg-gradient-card border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-muted-foreground">Company Name</label>
              <Input value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="mt-2" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Default Currency</label>
              <Input value={currency} onChange={(e) => setCurrency(e.target.value)} className="mt-2" />
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <Button className="bg-gradient-primary">Save Changes</Button>
            <Button variant="outline">Reset</Button>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
}
