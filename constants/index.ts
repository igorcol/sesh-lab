import { ProjectCardProps } from "@/types"

export const projectData = {
  id: "1",
  name: "Tropical House Remix",
  tags: ["House", "Remix", "Tropical"],
  status: "waiting" as const,
  versions: [
    {
      id: "v3",
      version: "1.2",
      date: "12/04/2024",
      author: "João Silva",
      notes: "Ajustes na mixagem e adição de novos elementos de percussão.",
    },
    {
      id: "v2",
      version: "1.1",
      date: "10/04/2024",
      author: "Maria Oliveira",
      notes: "Correção na linha de baixo e adição de novos vocais.",
    },
    {
      id: "v1",
      version: "1.0",
      date: "05/04/2024",
      author: "João Silva",
      notes: "Versão inicial do projeto.",
    },
  ],
  collaborators: [
    {
      id: "c1",
      email: "maria@exemplo.com",
      status: "ready" as const,
    },
    {
      id: "c2",
      email: "pedro@exemplo.com",
      status: "waiting" as const,
    },
    {
      id: "c3",
      email: "ana@exemplo.com",
      status: "pending" as const,
    },
  ],
}

export const projectsData: ProjectCardProps[] = [
  {
    id: "1",
    name: "Bossy",
    tags: ["House", "Remix", "Tropical"],
    date: "12/04/2024",
    status: "ready",
    collaborators: [
      { id: "c1", email: "maria@exemplo.com", status: "ready" },
      { id: "c2", email: "pedro@exemplo.com", status: "waiting" },
      { id: "c3", email: "ana@exemplo.com", status: "pending" },
    ],
  },
  {
    id: "2",
    name: "The Other Side of Matrix",
    tags: ["Techno", "Deep", "Collab"],
    date: "10/04/2024",
    status: "waiting",
    collaborators: [
      { id: "c4", email: "joao@exemplo.com", status: "ready" },
      { id: "c5", email: "carlos@exemplo.com", status: "waiting" },
    ],
  },
  {
    id: "3",
    name: "Tralalelo Tralala",
    tags: ["Synthwave", "80s", "Retro"],
    date: "05/04/2024",
    status: "ready",
    collaborators: [
      { id: "c6", email: "lucas@exemplo.com", status: "ready" },
      { id: "c7", email: "bruno@exemplo.com", status: "ready" },
      { id: "c8", email: "julia@exemplo.com", status: "waiting" },
      { id: "c9", email: "rafael@exemplo.com", status: "pending" },
    ],
  },
  {
    id: "4",
    name: "The Other Matrix of Side",
    tags: ["DnB", "EP", "Electronic"],
    date: "01/04/2024",
    status: "waiting",
    collaborators: [{ id: "c10", email: "amanda@exemplo.com", status: "waiting" }],
  },
  {
    id: "5",
    name: "Moonlight",
    tags: ["Ambient", "Chill", "Experimental"],
    date: "28/03/2024",
    status: "ready",
    collaborators: [
      { id: "c11", email: "gabriel@exemplo.com", status: "ready" },
      { id: "c12", email: "mariana@exemplo.com", status: "ready" },
      { id: "c13", email: "felipe@exemplo.com", status: "waiting" },
      { id: "c14", email: "tiago@exemplo.com", status: "pending" },
      { id: "c15", email: "laura@exemplo.com", status: "pending" },
    ],
  },
  {
    id: "6",
    name: "Lollipop",
    tags: ["Future Bass", "EDM", "Collab"],
    date: "25/03/2024",
    status: "waiting",
    collaborators: [
      { id: "c16", email: "sonju@exemplo.com", status: "waiting" },
      { id: "c17", email: "diego@exemplo.com", status: "waiting" },
      { id: "c18", email: "camila@exemplo.com", status: "pending" },
    ],
  },
]