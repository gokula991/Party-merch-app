"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { Plus, Minus, Trash2, ArrowLeft, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function CartPage() {
  const { state, updateQuantity, removeItem } = useCart()
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Floating glass orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => router.back()}
              className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm border border-white/20 shadow-lg hover:bg-white/80 hover:shadow-xl transition-all duration-300 rounded-xl"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Continue Shopping</span>
            </Button>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center space-x-3 drop-shadow-sm">
            <ShoppingBag className="h-8 w-8 text-primary drop-shadow-sm" />
            <span>Shopping Cart</span>
          </h1>
        </div>

        {state.items.length === 0 ? (
          <div className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20">
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-gray-100/80 to-gray-200/60 backdrop-blur-sm rounded-full flex items-center justify-center shadow-inner">
              <ShoppingBag className="h-16 w-16 text-gray-400" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8 text-lg">Add some products to get started!</p>
            <Button
              asChild
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl backdrop-blur-sm border border-white/20"
            >
              <Link href="/">Start Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Cart Items ({state.itemCount} item{state.itemCount !== 1 ? "s" : ""})
                </h2>

                <div className="space-y-6">
                  {state.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-6 p-4 bg-white/60 backdrop-blur-sm border border-white/30 rounded-xl hover:bg-white/80 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div className="flex-shrink-0">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-xl border border-white/30 shadow-md"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                        <p className="text-sm text-gray-600 mb-2 capitalize">{item.category}</p>
                        <p className="text-xl font-bold text-primary">${item.price.toFixed(2)}</p>
                      </div>

                      <div className="flex flex-col items-center space-y-4">
                        <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-xl p-2 border border-white/30 shadow-sm">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-10 w-10 p-0 hover:bg-white/80 rounded-lg transition-all duration-200"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-12 text-center font-semibold text-lg text-gray-900">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-10 w-10 p-0 hover:bg-white/80 rounded-lg transition-all duration-200"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50/80 backdrop-blur-sm rounded-lg p-2 transition-all duration-200"
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>

                      <div className="text-right">
                        <p className="text-sm text-gray-600 mb-1">Subtotal</p>
                        <p className="text-xl font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 sticky top-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Items ({state.itemCount})</span>
                    <span>${state.total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="flex justify-between text-xl font-bold text-gray-900">
                    <span>Total</span>
                    <span>${state.total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl backdrop-blur-sm border border-white/20"
                    asChild
                  >
                    <Link href="/checkout">Proceed to Checkout</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full bg-white/60 hover:bg-white/80 backdrop-blur-sm border-white/30 py-2 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                    asChild
                  >
                    <Link href="/">Continue Shopping</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
