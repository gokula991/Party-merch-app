import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="glossy-hero text-white py-20 relative">
      <div className="glass-orb glass-orb-1"></div>
      <div className="glass-orb glass-orb-2"></div>
      <div className="glass-orb glass-orb-3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 drop-shadow-lg">Official YSRCP Merchandise</h1>
            <p className="text-xl mb-8 text-white/90 drop-shadow-md">
              Show your support for YSR Congress Party with authentic merchandise. From campaign shirts to official
              accessories, every purchase supports our mission of social justice and development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="bg-white text-primary hover:bg-gray-100 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                <Link href="/products">Shop Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/50 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm transition-all duration-200 shadow-md hover:shadow-lg"
                asChild
              >
                <Link href="/donate">Make a Donation</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="glossy-card p-4 rounded-2xl">
              <img
                src="/political-merchandise-display.png"
                alt="YSR Congress Party Merchandise"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
