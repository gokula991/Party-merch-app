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
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" onClick={onClose} />

      <div className="fixed right-0 top-0 h-full w-full max-w-lg bg-white/95 backdrop-blur-xl border-l border-white/20 shadow-2xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200/50 bg-gradient-to-r from-primary/5 to-transparent">
          <h2 className="text-xl font-bold text-gray-900">Shopping Cart ({state.itemCount})</h2>
          <Button variant="ghost" size="sm" onClick={onClose} className="hover:bg-gray-100/80 rounded-full">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {state.items.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              </div>
              <p className="text-gray-500 mb-6 text-lg">Your cart is empty</p>
              <Button onClick={onClose} className="glossy-button px-8 py-3">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {state.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start space-x-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01]"
                >
                  <div className="relative overflow-hidden rounded-xl flex-shrink-0">
                    <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-20 h-20 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 rounded-xl"></div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base text-gray-900 mb-1 line-clamp-2">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-2 capitalize">{item.category}</p>
                    <p className="font-bold text-lg text-primary">${item.price.toFixed(2)}</p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center space-x-3 bg-gray-50/80 rounded-lg p-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 p-0 hover:bg-white/80 rounded-md"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-semibold text-gray-900">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 p-0 hover:bg-white/80 rounded-md"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50/80 rounded-md p-2"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="mt-2 text-right">
                      <span className="text-sm text-gray-600">Subtotal: </span>
                      <span className="font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="border-t border-gray-200/50 p-6 space-y-4 bg-gradient-to-t from-primary/5 to-transparent">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-700">Total Amount:</span>
                <span className="text-2xl font-bold text-primary">${state.total.toFixed(2)}</span>
              </div>
              <div className="text-sm text-gray-600 mt-1">
                {state.itemCount} item{state.itemCount !== 1 ? "s" : ""} in cart
              </div>
            </div>

            <div className="space-y-3">
              <Button className="w-full glossy-button py-3 text-lg font-semibold" asChild onClick={onClose}>
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>
              <Button
                variant="outline"
                className="w-full bg-white/50 hover:bg-white/80 border-gray-300/50 py-2"
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
