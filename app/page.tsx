import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="flex flex-col items-center justify-center py-20">
        <h1 className="text-4xl font-bold mb-4">
          Hi, Im John doe
        </h1>
        <p className="text-muted-foreground text-lg max-w-md mb-6">
          A fullstack developer passionate about building great web experiences.
        </p>

        <div className="flex gap-4">
          <Button asChild>
            <Link href={"/blog"}>Read Blog</Link>
          </Button>
          <Button variant={"outline"} asChild>
            <Link href={"/comments"}>
              <MessageCircle className="w-4 h-4 mr-2" /> Contact Me
            </Link>
          </Button>

        </div>

      </section>

    </main>
  );
}
