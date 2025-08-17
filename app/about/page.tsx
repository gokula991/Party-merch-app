import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Heart, Award } from "lucide-react"

const values = [
  {
    title: "Social Justice",
    description:
      "We are committed to ensuring equal opportunities and rights for all sections of society, especially the marginalized.",
    icon: Users,
  },
  {
    title: "Transparent Governance",
    description:
      "We believe in accountable leadership and transparent decision-making that serves the people's interests.",
    icon: Target,
  },
  {
    title: "Inclusive Development",
    description:
      "Our policies focus on inclusive growth that benefits every citizen, leaving no one behind in our progress.",
    icon: Heart,
  },
  {
    title: "Welfare State",
    description: "We are dedicated to building a welfare state that provides security and support to all citizens.",
    icon: Award,
  },
]

const teamMembers = [
  {
    name: "Y.S. Jagan Mohan Reddy",
    role: "Chief Minister & Party President",
    bio: "Leading Andhra Pradesh with a vision of inclusive development and social justice, continuing his father's legacy.",
    image: "/ys-jagan-mohan-reddy.png",
  },
  {
    name: "Vijayasai Reddy",
    role: "Rajya Sabha MP",
    bio: "Senior party leader and Rajya Sabha member working for the development of Andhra Pradesh.",
    image: "/vijayasai-reddy.png",
  },
  {
    name: "Botsa Satyanarayana",
    role: "Minister & Party Leader",
    bio: "Experienced leader dedicated to implementing welfare schemes and development programs.",
    image: "/botsa-satyanarayana.png",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-6">About YSR Congress Party</h1>
            <p className="text-xl text-white/90">
              YSR Congress Party is committed to social justice, inclusive development, and continuing the legacy of Dr.
              Y.S. Rajasekhara Reddy. We work tirelessly for the welfare of all people in Andhra Pradesh.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600">
                To build a prosperous and equitable Andhra Pradesh through transparent governance, inclusive
                development, and comprehensive welfare schemes that uplift every citizen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership</h2>
              <p className="text-lg text-gray-600">
                Dedicated leaders committed to serving the people of Andhra Pradesh with integrity and vision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Key Initiatives</h2>
              <p className="text-lg text-gray-600">
                Core welfare schemes and development programs that define our governance.
              </p>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Welfare Schemes</h3>
                <p className="text-gray-600">
                  Comprehensive welfare programs including YSR Rythu Bharosa, YSR Pension Kanuka, and various schemes
                  supporting farmers, women, and senior citizens.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Education & Healthcare</h3>
                <p className="text-gray-600">
                  Strengthening public education through infrastructure development and ensuring quality healthcare
                  access through YSR Aarogyasri and village clinics.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Industrial Development</h3>
                <p className="text-gray-600">
                  Promoting industrial growth, creating employment opportunities, and developing Andhra Pradesh as a hub
                  for manufacturing and technology.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Infrastructure & Agriculture</h3>
                <p className="text-gray-600">
                  Investing in modern infrastructure, irrigation projects, and supporting farmers with better prices,
                  technology, and market access.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
