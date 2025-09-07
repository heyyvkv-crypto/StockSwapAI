import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Order {
  id: string;
  type: 'Purchase' | 'Sales';
  vendorOrCustomer: string;
  total: number;
  status: string;
}

const sampleOrders: Order[] = [
  { id: 'PO-1001', type: 'Purchase', vendorOrCustomer: 'Acme Supplies', total: 125000, status: 'Created' },
  { id: 'SO-2002', type: 'Sales', vendorOrCustomer: 'Green Retail', total: 45000, status: 'Shipped' },
  { id: 'PO-1003', type: 'Purchase', vendorOrCustomer: 'Global Traders', total: 78000, status: 'Received' },
];

export default function Orders() {
  const [orders] = useState<Order[]>(sampleOrders);

  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Orders</h1>
            <p className="text-muted-foreground mt-1">Manage purchase and sales orders.</p>
          </div>
          <Button className="bg-gradient-primary">New Order</Button>
        </div>

        <Card className="p-4 bg-gradient-card border-border/50">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50 text-xs text-muted-foreground uppercase tracking-wider">
                  <th className="px-4 py-3 text-left">Order</th>
                  <th className="px-4 py-3 text-left">Type</th>
                  <th className="px-4 py-3 text-left">Vendor / Customer</th>
                  <th className="px-4 py-3 text-left">Total</th>
                  <th className="px-4 py-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id} className="border-b border-border/20 hover:bg-muted/20">
                    <td className="px-4 py-3 font-medium">{o.id}</td>
                    <td className="px-4 py-3">{o.type}</td>
                    <td className="px-4 py-3">{o.vendorOrCustomer}</td>
                    <td className="px-4 py-3">₹{o.total.toLocaleString()}</td>
                    <td className="px-4 py-3">{o.status}</td>
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
