import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DonationForm } from "@/components/donation-form"
import { DonationImpact } from "@/components/donation-impact"

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Our Movement</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your donation helps us build a stronger future for our community. Every contribution makes a difference in
              our campaign efforts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <DonationForm />
            <DonationImpact />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
