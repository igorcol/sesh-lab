'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter();

  const handleBtn = () => {
    router.push("/projects");
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <Button onClick={handleBtn} className="border border-border p-5 bg-green-400 cursor-pointer">Projetos</Button>

    </div>
  );
}
