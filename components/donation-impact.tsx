import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Megaphone, MapPin, Heart } from "lucide-react"

const impactItems = [
  {
    amount: "$25",
    impact: "Provides campaign materials for 10 volunteers",
    icon: Users,
  },
  {
    amount: "$50",
    impact: "Funds digital advertising to reach 1,000 voters",
    icon: Megaphone,
  },
  {
    amount: "$100",
    impact: "Supports a community outreach event",
    icon: MapPin,
  },
  {
    amount: "$250",
    impact: "Helps organize a town hall meeting",
    icon: Heart,
  },
]

export function DonationImpact() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Your Impact</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {impactItems.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-primary">{item.amount}</p>
                  <p className="text-sm text-gray-600">{item.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Fundraising Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>$45,678 raised</span>
              <span>$60,000 goal</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-primary h-3 rounded-full" style={{ width: "76%" }}></div>
            </div>
            <p className="text-sm text-gray-600">76% of goal reached • 234 donors</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Why Donate?</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Support grassroots organizing efforts</li>
            <li>• Fund community outreach programs</li>
            <li>• Enable voter education initiatives</li>
            <li>• Help us reach more constituents</li>
            <li>• Build a stronger political movement</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
