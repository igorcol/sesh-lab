"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { CheckCircle, Clock, Grid, List } from "lucide-react";
import { projectsData } from "@/constants";
import Link from "next/link";
import { ProjectCard } from "./ProjectCard";
import { Badge } from "./ui/badge";

const ProjectList = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Meus Projetos</h2>
        <div className="flex gap-2">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("grid")}
            className={viewMode === "grid" ? "bg-neon text-dark-300" : ""}
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("list")}
            className={viewMode === "list" ? "bg-neon text-dark-300" : ""}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* LISTA */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 bg-dark-200 border border-dark-100 rounded-lg hover:border-neon/30 transition-all duration-300"
            >
              <div className="space-y-2 flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg">{project.name}</h3>

                  {/* avatares */}
                  <div className="flex -space-x-2">
                    {project.collaborators.slice(0, 3).map((collaborator) => (
                      <div
                        key={collaborator.id}
                        className={`flex items-center justify-center w-6 h-6 rounded-full border-2 border-dark-200 text-xs font-medium ${
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

                    {project.collaborators.length > 3 && (
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-dark-100 border-2 border-dark-200 text-xs font-medium text-muted-foreground">
                        +{project.collaborators.length - 3}
                      </div>
                    )}
                  </div>
                </div>

                {/* BADGE */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-neon/50 text-white bg-transparent"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="text-sm text-muted-foreground">
                  Enviado em: {project.date}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <div className="flex items-center gap-2">
                  {project.status === "ready" ? (
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

                <Link href={`/projeto/${project.id}`}>
                  <Button className="w-full sm:w-auto bg-neon text-dark-300 hover:bg-neon/90 transition-all">
                    Ver Projeto
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectList;
