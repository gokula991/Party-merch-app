import { AdminHeader } from "@/components/admin/admin-header"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { DonationsOverview } from "@/components/admin/donations-overview"

export default function AdminDonationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Donations</h1>
            <p className="text-gray-600">Track campaign donations and fundraising progress</p>
          </div>
          <DonationsOverview />
        </main>
      </div>
    </div>
  )
}
