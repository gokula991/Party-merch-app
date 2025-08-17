import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">All Products</h1>
            <p className="text-lg text-gray-600">
              Browse our complete collection of official political party merchandise
            </p>
          </div>
          <ProductGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}
