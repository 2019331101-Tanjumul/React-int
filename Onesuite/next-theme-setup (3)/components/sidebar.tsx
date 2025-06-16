"use client"

import {
  Home,
  CheckSquare,
  FolderOpen,
  Users,
  FileText,
  Receipt,
  UserCheck,
  MessageCircle,
  Settings,
  Grid3X3,
} from "lucide-react"
import { useState } from "react"

const sidebarItems = [
  { icon: Home, label: "Home", active: false },
  { icon: CheckSquare, label: "My Tasks", active: false },
  { icon: FolderOpen, label: "Projects", active: true },
  { icon: Users, label: "Leads", active: false },
  { icon: FileText, label: "Documents", active: false },
  { icon: Receipt, label: "Invoices", active: false },
  { icon: UserCheck, label: "Clients", active: false },
  { icon: Users, label: "Team", active: false },
]

export function Sidebar() {
  const [activeItem, setActiveItem] = useState("Projects")

  return (
    <div className="sidebar-fixed">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Grid3X3 className="w-6 h-6 text-blue-600" />
          <span className="font-semibold text-lg">TelnemMI</span>
        </div>
      </div>

      <nav className="p-4 space-y-1">
        {sidebarItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
              activeItem === item.label ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"
            }`}
            onClick={() => setActiveItem(item.label)}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="absolute bottom-4 left-4 right-4 space-y-1">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-gray-600 hover:bg-gray-50 transition-colors">
          <MessageCircle className="w-4 h-4" />
          Chat with us
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-gray-600 hover:bg-gray-50 transition-colors">
          <Settings className="w-4 h-4" />
          Settings
        </button>
      </div>
    </div>
  )
}
