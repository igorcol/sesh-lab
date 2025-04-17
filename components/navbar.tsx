'use client'
import { Music, PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="h-16 border-b border-dark-100 bg-dark-300 sticky top-0 z-10 flex justify-center items-center">
      <div className="container flex h-full items-center justify-between ">
        <Link href="/" className="flex items-center gap-2">
          <Music className="h-6 w-6 text-neon" />
          <span className="text-xl font-bold tracking-tight">SeshLab</span>
        </Link>

        <Button
          onClick={() => router.push("/new-project")}
          className="bg-neon text-dark-300 hover:bg-neon/90 transition-all cursor-pointer"
        >
            <PlusCircle className="mr-2 h-4 w-4"/>
            Novo Projeto
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
