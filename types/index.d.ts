export interface ProjectCardProps {
    id: string
    name: string
    tags: string[]
    date: string
    status: "ready" | "waiting"
    collaborators: { id: string; email: string; status: "ready" | "waiting" | "pending" }[]
  }