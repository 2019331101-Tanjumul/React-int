"use client"

import { ProjectCard } from "./project-card"
import { Button } from "@nextui-org/react"
import { Plus, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    title: "NL_hi",
    progress: "0/0 0%",
    status: [
      { label: "MEDIUM", color: "warning" as const },
      { label: "WORKING", color: "primary" as const },
    ],
    date: "May 01, 2025",
    avatar: "./unnamed.jpg",
  },
  {
    title: "Cohort",
    progress: "0/0 0%",
    status: [
      { label: "LOW", color: "success" as const },
      { label: "WORKING", color: "primary" as const },
    ],
    date: "May 16, 2025",
    avatar: "./unnamed.jpg",
  },
  {
    title: "Buybliss",
    progress: "0/0 0%",
    status: [
      { label: "MEDIUM", color: "warning" as const },
      { label: "COMPLETED", color: "success" as const },
    ],
    date: "May 14, 2025",
    avatar: "./unnamed.jpg",
  },
  {
    title: "PiDotnet",
    progress: "0/0 0%",
    status: [
      { label: "LOW", color: "success" as const },
      { label: "WORKING", color: "primary" as const },
    ],
    date: "May 04, 2025",
    avatar: "./unnamed.jpg",
  },
  {
    title: "Raspberry-route",
    progress: "0/0 0%",
    status: [
      { label: "HIGH", color: "success" as const },
      { label: "WORKING", color: "primary" as const },
    ],
    date: "May 04, 2025",
    avatar: "./unnamed.jpg",
  },
]

export function ProjectGrid() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Projects</h2>
        {/* <Button color="primary" startContent={<Plus className="w-4 h-4" />}>
          Create Project
        </Button> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <div className="flex items-center justify-center gap-2">
        <Button isIconOnly size="sm" variant="light" isDisabled>
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <Button size="sm" color="primary" variant="flat">
          1
        </Button>
        <Button isIconOnly size="sm" variant="light">
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
