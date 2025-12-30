import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import { Content } from "next/font/google";
import Link from "next/link";

export default function Home() {

  const posts = [
    {
      id: 1,
      slug: "learn-nextjs-basics",
      title: "learn Next.js Basics",
      content: `Learn Next.js Basics
      Next.js is a popular React framework that helps you build fast and SEO-friendly websites.

      ## Why use Next.js?
      - Built-in routing system
      - Server-side rendering and static generation
      - Great developer experience

      `
    },
  ]

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

      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          About Me
        </h2>
        <p className="text-muted-foreground">
          I specialize in React, Node.js and Typescript, with years of experience building scalable applications, I love turning ideas into reality
        </p>
      </section>

      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          Recents Posts
        </h2>
        {posts.length > 0 ? (
          <div>
            {posts.map(post => (
              <Card key={post.id} className="hover:bg-accent transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  <CardContent className="p-4">
                    <h3 className="font-semibold">
                      {post.title}
                    </h3>
                    {/* <p className="text-sm text-muted-foreground">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </p> */}
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground"> No posts yet</p>
        )}
      </section>

    </main>
  );
}
