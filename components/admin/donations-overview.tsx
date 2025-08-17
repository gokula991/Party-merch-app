import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Users, Target, TrendingUp } from "lucide-react"

const donationStats = [
  {
    title: "Total Raised",
    value: "$45,678",
    change: "+18.2%",
    icon: DollarSign,
  },
  {
    title: "Donors",
    value: "234",
    change: "+12.5%",
    icon: Users,
  },
  {
    title: "Goal Progress",
    value: "76%",
    change: "+8.3%",
    icon: Target,
  },
  {
    title: "Avg. Donation",
    value: "$195",
    change: "+5.1%",
    icon: TrendingUp,
  },
]

const recentDonations = [
  { id: "DON-001", donor: "Anonymous", amount: 500, date: "2024-01-15", type: "One-time" },
  { id: "DON-002", donor: "Jane Smith", amount: 100, date: "2024-01-15", type: "Monthly" },
  { id: "DON-003", donor: "Robert Johnson", amount: 250, date: "2024-01-14", type: "One-time" },
  { id: "DON-004", donor: "Mary Davis", amount: 50, date: "2024-01-14", type: "Monthly" },
  { id: "DON-005", donor: "Anonymous", amount: 1000, date: "2024-01-13", type: "One-time" },
]

export function DonationsOverview() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {donationStats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center text-xs text-green-600">
                <TrendingUp className="h-3 w-3 mr-1" />
                <span>{stat.change} from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Fundraising Goal Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Fundraising Goal Progress</CardTitle>
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
            <p className="text-sm text-gray-600">76% of goal reached • $14,322 remaining</p>
          </div>
        </CardContent>
      </Card>

      {/* Recent Donations */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Donations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentDonations.map((donation) => (
              <div key={donation.id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{donation.donor}</p>
                  <p className="text-sm text-gray-600">
                    {donation.date} • {donation.type}
                  </p>
                </div>
                <span className="font-bold text-primary">${donation.amount}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
