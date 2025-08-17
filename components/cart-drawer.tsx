"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { X, Plus, Minus, Trash2 } from "lucide-react"
import Link from "next/link"

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { state, updateQuantity, removeItem } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={onClose} />

      <div className="fixed right-0 top-0 h-full w-full max-w-md glossy-cart-drawer shadow-xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <h2 className="text-lg font-semibold text-gray-900">Shopping Cart ({state.itemCount})</h2>
          <Button variant="ghost" size="sm" onClick={onClose} className="hover:bg-white/20">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {state.items.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">Your cart is empty</p>
              <Button onClick={onClose} className="glossy-button">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-4 glossy-cart-item p-3 rounded-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-16 h-16 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.category}</p>
                    <p className="font-semibold text-primary">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="h-8 w-8 p-0 bg-white/50 hover:bg-white/70 border-primary/20"
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="h-8 w-8 p-0 bg-white/50 hover:bg-white/70 border-primary/20"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50/50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="border-t border-white/20 p-4 space-y-4 bg-gradient-to-t from-white/10 to-transparent">
            <div className="flex justify-between items-center text-lg font-semibold text-gray-900">
              <span>Total: ${state.total.toFixed(2)}</span>
            </div>
            <div className="space-y-2">
              <Button className="w-full glossy-button" asChild onClick={onClose}>
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>
              <Button
                variant="outline"
                className="w-full bg-white/30 hover:bg-white/50 border-white/30"
                onClick={onClose}
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
