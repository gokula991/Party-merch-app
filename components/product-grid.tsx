"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/contexts/cart-context"

const allProducts = [
  {
    id: 1,
    name: "Official Campaign T-Shirt",
    price: 25.99,
    image: "/political-campaign-tshirt.png",
    category: "Shirts",
  },
  {
    id: 2,
    name: "Party Logo Baseball Cap",
    price: 19.99,
    image: "/political-cap.png",
    category: "Caps",
  },
  {
    id: 3,
    name: "Campaign Button Set",
    price: 12.99,
    image: "/political-campaign-buttons-badges.png",
    category: "Accessories",
  },
  {
    id: 4,
    name: "Official Polo Shirt",
    price: 35.99,
    image: "/political-polo-professional.png",
    category: "Shirts",
  },
  {
    id: 5,
    name: "Campaign Hoodie",
    price: 45.99,
    image: "/political-campaign-hoodie.png",
    category: "Shirts",
  },
  {
    id: 6,
    name: "Party Pen Set",
    price: 8.99,
    image: "/political-pens-set.png",
    category: "Accessories",
  },
  {
    id: 7,
    name: "Campaign Tote Bag",
    price: 15.99,
    image: "/political-tote-bag.png",
    category: "Accessories",
  },
  {
    id: 8,
    name: "Official Dress Pants",
    price: 65.99,
    image: "/political-dress-pants.png",
    category: "Pants",
  },
]

export function ProductGrid() {
  const { addItem } = useCart()

  const handleAddToCart = (product: (typeof allProducts)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    })
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {allProducts.map((product) => (
        <Card key={product.id} className="group glossy-card hover:shadow-lg transition-all duration-300">
          <CardContent className="p-0">
            <div className="aspect-square overflow-hidden rounded-t-lg relative">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-4">
              <p className="text-sm text-primary font-medium mb-1">{product.category}</p>
              <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">${product.price}</span>
                <Button size="sm" onClick={() => handleAddToCart(product)} className="glossy-button">
                  Add to Cart
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
