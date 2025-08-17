import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactInfo = [
  {
    title: "Party Office",
    details: ["YSR Congress Party Headquarters", "Tadepalli, Guntur District, AP"],
    icon: MapPin,
  },
  {
    title: "Phone",
    details: ["(0863) 234-5678", "Party Helpline"],
    icon: Phone,
  },
  {
    title: "Email",
    details: ["info@ysrcp.com", "General Inquiries"],
    icon: Mail,
  },
  {
    title: "Office Hours",
    details: ["Mon-Fri: 9AM-6PM", "Sat: 10AM-4PM"],
    icon: Clock,
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We want to hear from you! Reach out with questions, concerns, or to get involved with YSR Congress Party.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-sm text-gray-600">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Get Involved</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900">Volunteer Opportunities</h4>
                      <p className="text-sm text-gray-600">
                        Join our team and work for social justice and development in Andhra Pradesh.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Public Meetings</h4>
                      <p className="text-sm text-gray-600">
                        Attend our regular community meetings to share your voice and concerns.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Newsletter</h4>
                      <p className="text-sm text-gray-600">
                        Stay updated on party news, welfare schemes, and development initiatives.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
