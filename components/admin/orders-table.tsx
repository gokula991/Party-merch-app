import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, Package, Truck } from "lucide-react"

const orders = [
  {
    id: "ORD-001",
    customer: "John Smith",
    email: "john@example.com",
    total: 45.99,
    items: 2,
    status: "Completed",
    date: "2024-01-15",
    address: "123 Main St, Anytown, ST 12345",
  },
  {
    id: "ORD-002",
    customer: "Sarah Johnson",
    email: "sarah@example.com",
    total: 25.99,
    items: 1,
    status: "Processing",
    date: "2024-01-15",
    address: "456 Oak Ave, Somewhere, ST 67890",
  },
  {
    id: "ORD-003",
    customer: "Mike Davis",
    email: "mike@example.com",
    total: 67.98,
    items: 3,
    status: "Shipped",
    date: "2024-01-14",
    address: "789 Pine Rd, Elsewhere, ST 54321",
  },
  {
    id: "ORD-004",
    customer: "Emily Brown",
    email: "emily@example.com",
    total: 19.99,
    items: 1,
    status: "Completed",
    date: "2024-01-14",
    address: "321 Elm St, Nowhere, ST 98765",
  },
  {
    id: "ORD-005",
    customer: "David Wilson",
    email: "david@example.com",
    total: 89.97,
    items: 4,
    status: "Processing",
    date: "2024-01-13",
    address: "654 Maple Dr, Anywhere, ST 13579",
  },
]

export function OrdersTable() {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left p-4 font-medium text-gray-900">Order ID</th>
                <th className="text-left p-4 font-medium text-gray-900">Customer</th>
                <th className="text-left p-4 font-medium text-gray-900">Total</th>
                <th className="text-left p-4 font-medium text-gray-900">Items</th>
                <th className="text-left p-4 font-medium text-gray-900">Status</th>
                <th className="text-left p-4 font-medium text-gray-900">Date</th>
                <th className="text-left p-4 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium">{order.id}</td>
                  <td className="p-4">
                    <div>
                      <p className="font-medium">{order.customer}</p>
                      <p className="text-sm text-gray-600">{order.email}</p>
                    </div>
                  </td>
                  <td className="p-4 font-medium">${order.total}</td>
                  <td className="p-4">{order.items}</td>
                  <td className="p-4">
                    <span
                      className={`inline-block px-2 py-1 text-xs rounded-full ${
                        order.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : order.status === "Processing"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4 text-gray-600">{order.date}</td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      {order.status === "Processing" && (
                        <Button variant="ghost" size="sm">
                          <Package className="h-4 w-4" />
                        </Button>
                      )}
                      {order.status === "Shipped" && (
                        <Button variant="ghost" size="sm">
                          <Truck className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
