import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Official YSRCP Merchandise</h1>
            <p className="text-xl mb-8 text-white/90">
              Show your support for YSR Congress Party with authentic merchandise. From campaign shirts to official
              accessories, every purchase supports our mission of social justice and development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/products">Shop Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/donate">Make a Donation</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/political-merchandise-display.png"
              alt="YSR Congress Party Merchandise"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
