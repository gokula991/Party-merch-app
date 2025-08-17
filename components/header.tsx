"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Search, Menu } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { CartDrawer } from "@/components/cart-drawer"
import { useState } from "react"

export function Header() {
  const { state } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src="/ysr-congress-logo.jpeg"
                  alt="YSR Congress Party Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold text-xl text-gray-900">YSR Congress Party</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-700 hover:text-primary font-medium">
              All Products
            </Link>
            <Link href="/categories/shirts" className="text-gray-700 hover:text-primary font-medium">
              Shirts
            </Link>
            <Link href="/categories/caps" className="text-gray-700 hover:text-primary font-medium">
              Caps
            </Link>
            <Link href="/categories/accessories" className="text-gray-700 hover:text-primary font-medium">
              Accessories
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary font-medium">
              About
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="relative" onClick={() => setIsCartOpen(true)}>
              <ShoppingCart className="h-5 w-5" />
              {state.itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.itemCount}
                </span>
              )}
            </Button>
            <Button variant="outline" size="sm" className="hidden md:inline-flex bg-transparent">
              Sign In
            </Button>
            <Button size="sm">Donate</Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  )
}
