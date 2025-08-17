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
    <header className="glossy-header border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/30 shadow-lg">
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
            <Link href="/products" className="text-gray-700 hover:text-primary font-medium transition-colors">
              All Products
            </Link>
            <Link href="/categories/shirts" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Shirts
            </Link>
            <Link href="/categories/caps" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Caps
            </Link>
            <Link
              href="/categories/accessories"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Accessories
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary font-medium transition-colors">
              About
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hover:bg-white/20">
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="relative hover:bg-white/20"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              {state.itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-br from-primary to-primary/80 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-lg ring-2 ring-white/50">
                  {state.itemCount}
                </span>
              )}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="hidden md:inline-flex bg-white/30 hover:bg-white/50 border-white/30"
            >
              Sign In
            </Button>
            <Button size="sm" className="glossy-button">
              Donate
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden hover:bg-white/20">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  )
}
