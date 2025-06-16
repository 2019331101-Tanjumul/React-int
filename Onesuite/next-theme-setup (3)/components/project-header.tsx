"use client"

import { Button, Input, Avatar } from "@nextui-org/react"
import { Plus, Search, Grid3X3, List, Filter, Bell, ChevronDown } from "lucide-react"
import { useState } from "react"

const statusTabs = [
  { key: "all", label: "All (5)", active: true },
  { key: "pinned", label: "Pinned (0)", active: false },
  { key: "working", label: "Working (4)", active: false },
  { key: "completed", label: "Completed (1)", active: false },
  { key: "paused", label: "Paused (0)", active: false },
  { key: "archived", label: "Archived (0)", active: false },
]

export function ProjectHeader() {
  const [activeTab, setActiveTab] = useState("all")
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            {/* <h1 className="text-2xl font-semibold text-gray-900">All Projects</h1> */}
            {/* <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Projects</span>
              <span>•</span>
              <span>5</span>
            </div> */}
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Button
                variant="bordered"
                endContent={<ChevronDown className="w-4 h-4" />}
                onClick={() => setShowDropdown(!showDropdown)}
              >
                My Projects
              </Button>
              {showDropdown && (
                <div className="absolute top-full mt-1 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[150px]">
                  <div className="py-1">
                    <button className="w-full px-3 py-2 text-left hover:bg-gray-50 text-sm">All Projects</button>
                    <button className="w-full px-3 py-2 text-left hover:bg-gray-50 text-sm">My Projects</button>
                    <button className="w-full px-3 py-2 text-left hover:bg-gray-50 text-sm">Shared Projects</button>
                  </div>
                </div>
              )}
            </div>

            <Button isIconOnly variant="light">
              <Plus className="w-4 h-4" />
            </Button>

            <Button isIconOnly variant="light">
              <Bell className="w-4 h-4" />
            </Button>

            <Avatar size="sm" src="./unnamed.jpg" className="w-8 h-8" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Button color="primary" startContent={<Plus className="w-4 h-4" />}>
            Create Project
          </Button>

          <div className="flex items-center gap-3">
            <Input
              placeholder="Search..."
              startContent={<Search className="w-4 h-4 text-gray-400" />}
              className="w-64"
              size="sm"
            />
            <Button isIconOnly variant="light" size="sm">
              <Grid3X3 className="w-4 h-4" />
            </Button>
            <Button isIconOnly variant="light" size="sm">
              <List className="w-4 h-4" />
            </Button>
            <Button isIconOnly variant="light" size="sm">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="px-6">
        <div className="flex border-b border-gray-200">
          {statusTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.key
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
