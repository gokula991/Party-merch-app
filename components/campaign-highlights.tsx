"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Heart } from "lucide-react"

export function CampaignHighlights() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
    setIsSubscribed(true)
    setEmail("")
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every purchase and donation supports our commitment to social justice and development in Andhra Pradesh
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center p-6">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Social Justice</h3>
              <p className="text-gray-600">
                Ensuring equal opportunities and rights for all sections of society, especially the marginalized
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Development Vision</h3>
              <p className="text-gray-600">
                Focused on inclusive development that benefits every citizen of Andhra Pradesh
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Welfare State</h3>
              <p className="text-gray-600">
                Committed to building a welfare state that provides security and support to all
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-primary/5 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Special YSRCP Supporter Offer</h3>
          <p className="text-lg text-gray-600 mb-6">Get 20% off your first order when you sign up for our newsletter</p>

          {isSubscribed ? (
            <div className="text-green-600 font-medium">
              Thank you for subscribing! Check your email for your discount code.
            </div>
          ) : (
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button type="submit" className="glass-button-primary">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
