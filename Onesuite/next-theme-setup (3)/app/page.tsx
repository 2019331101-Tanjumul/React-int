import { Sidebar } from "@/components/sidebar"
import { ProjectHeader } from "@/components/project-header"
import { ProjectGrid } from "@/components/project-grid"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="main-content">
        <ProjectHeader />
        <ProjectGrid />
      </div>
    </div>
  )
}
