import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Users, Megaphone, Calendar, MapPin, Computer } from "lucide-react"

const opportunities = [
  {
    title: "Phone Banking",
    description: "Make calls to voters and help spread our message",
    time: "Flexible hours",
    location: "Remote or Campaign Office",
    icon: Phone,
  },
  {
    title: "Canvassing",
    description: "Go door-to-door to connect with voters in your neighborhood",
    time: "Weekends",
    location: "Local neighborhoods",
    icon: Users,
  },
  {
    title: "Event Support",
    description: "Help organize and run campaign events and rallies",
    time: "As needed",
    location: "Various venues",
    icon: Calendar,
  },
  {
    title: "Digital Outreach",
    description: "Manage social media and online campaign efforts",
    time: "Flexible",
    location: "Remote",
    icon: Computer,
  },
  {
    title: "Community Organizing",
    description: "Build coalitions and engage with local organizations",
    time: "Part-time",
    location: "Community centers",
    icon: MapPin,
  },
  {
    title: "Campaign Events",
    description: "Help with setup, registration, and coordination",
    time: "Event days",
    location: "Event venues",
    icon: Megaphone,
  },
]

export function VolunteerOpportunities() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Volunteer Opportunities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <opportunity.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{opportunity.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{opportunity.description}</p>
                    <div className="flex flex-col sm:flex-row sm:space-x-4 text-xs text-gray-500">
                      <span>⏰ {opportunity.time}</span>
                      <span>📍 {opportunity.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Why Volunteer?</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Make a direct impact on your community</li>
            <li>• Meet like-minded people who share your values</li>
            <li>• Gain valuable experience in political organizing</li>
            <li>• Help shape the future of our movement</li>
            <li>• Flexible opportunities that fit your schedule</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
