import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { VolunteerForm } from "@/components/volunteer-form"
import { VolunteerOpportunities } from "@/components/volunteer-opportunities"

export default function VolunteerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Volunteer with us to make a real difference in our community. Together, we can build the change we want to
              see.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <VolunteerOpportunities />
            <VolunteerForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
