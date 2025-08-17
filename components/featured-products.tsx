"use client"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/contexts/cart-context"
import Link from "next/link"

const featuredProducts = [
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
]

export function FeaturedProducts() {
  const { addItem } = useCart()

  const handleAddToCart = (product: (typeof featuredProducts)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    })
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-green-50/30 to-blue-50/20 relative overflow-hidden">
      <div className="glass-orb glass-orb-1"></div>
      <div className="glass-orb glass-orb-2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 drop-shadow-sm">Featured Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto drop-shadow-sm">
            Discover our most popular campaign merchandise and show your support in style
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="glossy-product-card group">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden rounded-t-lg relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-primary font-medium mb-1 drop-shadow-sm">{product.category}</p>
                  <h3 className="font-semibold text-gray-900 mb-2 drop-shadow-sm">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900 drop-shadow-sm">${product.price}</span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="glass-button-secondary text-sm px-4 py-2"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/products" className="glass-button-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
