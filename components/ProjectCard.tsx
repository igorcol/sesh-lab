
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock } from "lucide-react"
import Link from "next/link"
import { Badge } from "./ui/badge"

// Modificar a interface ProjectCardProps para incluir colaboradores
export interface ProjectCardProps {
  id: string
  name: string
  tags: string[]
  date: string
  status: "ready" | "waiting"
  collaborators: { id: string; email: string; status: "ready" | "waiting" | "pending" }[]
}

// Atualizar a função ProjectCard para incluir os avatares dos colaboradores
export function ProjectCard({ id, name, tags, date, status, collaborators }: ProjectCardProps) {
  // Limitar o número de avatares visíveis
  const maxVisibleAvatars = 3
  const hasMoreCollaborators = collaborators.length > maxVisibleAvatars
  const visibleCollaborators = collaborators.slice(0, maxVisibleAvatars)

  return (
    <Card className="bg-dark-200 border border-dark-100 hover:border-neon/30 transition-all duration-300">
      <CardHeader className="pb-2 flex flex-row justify-between items-start">
        <CardTitle className="text-xl font-bold text-white">{name}</CardTitle>

        {/* Avatares dos colaboradores */}
        <div className="flex -space-x-2">
          {visibleCollaborators.map((collaborator) => (
            <div
              key={collaborator.id}
              className={`flex items-center justify-center w-8 h-8 rounded-full border-2 border-dark-200 text-xs font-medium ${
                collaborator.status === "ready"
                  ? "bg-neon/20 text-neon"
                  : collaborator.status === "waiting"
                    ? "bg-amber-400/20 text-amber-400"
                    : "bg-dark-100 text-muted-foreground"
              }`}
              title={collaborator.email}
            >
              {collaborator.email.charAt(0).toUpperCase()}
            </div>
          ))}

          {hasMoreCollaborators && (
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-dark-100 border-2 border-dark-200 text-xs font-medium text-muted-foreground">
              +{collaborators.length - maxVisibleAvatars}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="border-neon/50 text-white bg-transparent">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="text-sm text-muted-foreground">Enviado em: {date}</div>

        <div className="flex items-center gap-2">
          {status === "ready" ? (
            <>
              <CheckCircle className="h-5 w-5 text-neon" />
              <span className="text-neon">Pronto</span>
            </>
          ) : (
            <>
              <Clock className="h-5 w-5 text-amber-400" />
              <span className="text-amber-400">Aguardando</span>
            </>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/projeto/${id}`} className="w-full">
          <Button className="w-full bg-neon text-dark-300 hover:bg-neon/90 transition-all">Ver Projeto</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
