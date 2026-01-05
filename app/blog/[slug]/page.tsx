import prisma from "@/lib/db"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import MarkdownRenderer from "@/components/ui/markdown-renderer"
import CommentForm from "@/components/ui/comment-form"
import CommentList from "@/components/ui/comment-list"

export default async function BlogPostPage({
    params,
}: {
    params: { slug: string }
}) {
    const { slug } = params

    const post = await prisma.blogPost.findUnique({
        where: { slug },
        include: {
            comments: {
                orderBy: { createdAt: "desc" }, // This is fine if regenerated client is correct
            },
        },
    })


    if (!post) {
        notFound()
    }

    return (
        <main className="min-h-screen py-16 px-4">
            <article className="max-w-3xl mx-auto">
                <Button variant="ghost" asChild className="mb-8">
                    <Link href="/blog">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Blogs
                    </Link>
                </Button>

                <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

                <div className="text-muted-foreground mb-8">
                    {new Date(post.createdAt).toLocaleDateString()}
                </div>

                <div className="prose prose-neutral dark:prose-invert max-w-none">
                    <MarkdownRenderer content={post.content} />
                </div>

                {/* 👇 POST-SPECIFIC COMMENTS */}
                <section className="mt-12">
                    <CommentForm postId={post.id} />
                    <CommentList comments={post.comments} />
                </section>
            </article>
        </main>
    )
}
