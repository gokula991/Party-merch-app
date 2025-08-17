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
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />

      <div className="fixed right-0 top-0 h-full w-full max-w-lg bg-white border-l border-gray-200 shadow-xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
          <h2 className="text-xl font-bold text-gray-900">Shopping Cart ({state.itemCount})</h2>
          <Button variant="ghost" size="sm" onClick={onClose} className="hover:bg-gray-100 rounded-full">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {state.items.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              </div>
              <p className="text-gray-500 mb-6 text-lg">Your cart is empty</p>
              <Button onClick={onClose} className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start space-x-4 bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="relative overflow-hidden rounded-lg flex-shrink-0">
                    <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-20 h-20 object-cover" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base text-gray-900 mb-1 line-clamp-2">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-2 capitalize">{item.category}</p>
                    <p className="font-bold text-lg text-primary">${item.price.toFixed(2)}</p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center space-x-3 bg-gray-50 rounded-lg p-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 p-0 hover:bg-gray-200 rounded-md"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-semibold text-gray-900">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 p-0 hover:bg-gray-200 rounded-md"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50 rounded-md p-2"
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
          <div className="border-t border-gray-200 p-6 space-y-4 bg-white">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-700">Total Amount:</span>
                <span className="text-2xl font-bold text-primary">${state.total.toFixed(2)}</span>
              </div>
              <div className="text-sm text-gray-600 mt-1">
                {state.itemCount} item{state.itemCount !== 1 ? "s" : ""} in cart
              </div>
            </div>

            <div className="space-y-3">
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg font-semibold"
                asChild
                onClick={onClose}
              >
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>
              <Button
                variant="outline"
                className="w-full bg-white hover:bg-gray-50 border-gray-300 py-2"
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
