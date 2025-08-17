import Link from "next/link"

export function Hero() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-green-400 via-yellow-400 to-red-500 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 rounded-full opacity-20 blur-lg"></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-15 blur-2xl"></div>

      <div className="absolute top-1/4 right-1/3 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-lg"></div>
      <div className="absolute bottom-1/3 left-1/5 w-16 h-16 bg-white/15 backdrop-blur-sm rounded-full border border-white/30 shadow-md"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full border border-white/40 shadow-sm"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 drop-shadow-sm">
              Official YSRCP Merchandise
            </h1>
            <p className="text-xl mb-8 text-gray-700 drop-shadow-sm">
              Show your support for YSR Congress Party with authentic merchandise. From campaign shirts to official
              accessories, every purchase supports our mission of social justice and development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="glass-button-primary text-center">
                Shop Now
              </Link>
              <Link href="/donate" className="glass-button-outline text-center">
                Make a Donation
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/20 backdrop-blur-md p-6 rounded-3xl border border-white/30 shadow-2xl">
              <img
                src="/political-merchandise-display.png"
                alt="YSR Congress Party Merchandise"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
