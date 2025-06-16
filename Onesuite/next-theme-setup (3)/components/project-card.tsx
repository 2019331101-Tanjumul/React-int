"use client"

import { Card, CardBody, Chip, Avatar, Button } from "@nextui-org/react"
import { Calendar, MoreHorizontal } from "lucide-react"

interface ProjectCardProps {
  title: string
  progress: string
  status: Array<{ label: string; color: "warning" | "primary" | "success" | "default" }>
  date: string
  avatar: string
}

export function ProjectCard({ title, progress, status, date, avatar }: ProjectCardProps) {
  return (
    <Card className="project-card">
      <CardBody className="rounded-md shadow bg-white pt-2 pb-3 px-3 hover:bg-primary-50 dark:hover:bg-grey-2 cursor-pointer border border-grey-3 dark:border-0">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <Button isIconOnly size="sm" variant="light">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm text-gray-600">{progress}</span>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {status.map((chip, index) => (
            <Chip key={index} size="sm" variant="flat" color={chip.color} className="text-xs">
              {chip.label}
            </Chip>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Calendar className="w-3 h-3" />
            <span>{date}</span>
          </div>
          <Avatar size="sm" src={avatar} className="w-6 h-6" />
        </div>
      </CardBody>
    </Card>
  )
}
