import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Edit, Trash2, Eye } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Official Campaign T-Shirt",
    category: "Shirts",
    price: 25.99,
    stock: 150,
    status: "Active",
    image: "/political-campaign-tshirt.png",
  },
  {
    id: 2,
    name: "Party Logo Baseball Cap",
    category: "Caps",
    price: 19.99,
    stock: 75,
    status: "Active",
    image: "/political-cap.png",
  },
  {
    id: 3,
    name: "Campaign Button Set",
    category: "Accessories",
    price: 12.99,
    stock: 200,
    status: "Active",
    image: "/political-campaign-buttons-badges.png",
  },
  {
    id: 4,
    name: "Official Polo Shirt",
    category: "Shirts",
    price: 35.99,
    stock: 50,
    status: "Low Stock",
    image: "/political-polo-professional.png",
  },
  {
    id: 5,
    name: "Campaign Hoodie",
    category: "Shirts",
    price: 45.99,
    stock: 0,
    status: "Out of Stock",
    image: "/political-campaign-hoodie.png",
  },
]

export function ProductsTable() {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left p-4 font-medium text-gray-900">Product</th>
                <th className="text-left p-4 font-medium text-gray-900">Category</th>
                <th className="text-left p-4 font-medium text-gray-900">Price</th>
                <th className="text-left p-4 font-medium text-gray-900">Stock</th>
                <th className="text-left p-4 font-medium text-gray-900">Status</th>
                <th className="text-left p-4 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <span className="font-medium">{product.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600">{product.category}</td>
                  <td className="p-4 font-medium">${product.price}</td>
                  <td className="p-4">{product.stock}</td>
                  <td className="p-4">
                    <span
                      className={`inline-block px-2 py-1 text-xs rounded-full ${
                        product.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : product.status === "Low Stock"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </Button>
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
