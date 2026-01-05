"use client"
import { useRouter } from 'next/navigation'
import { Textarea } from './textarea'
import { useState } from 'react'
import { Button } from './button'
import { Loader2, Send } from 'lucide-react'
import { error } from 'node:console'

export default function CommentForm() {
    const [content, setcontent] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const router = useRouter();


    const handlesubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!content.trim()) return;

        setIsSubmitting(true)

        try {
            const res = await fetch("/api/comments", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ content })
            })

            if (res.ok) {
                setcontent("");
                router.refresh();
            }
        }
        catch {
            console.log("Failed to submit comment", )
        }
        finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handlesubmit} className='flex flex-col gap-3' >
            <Textarea
                value={content}
                onChange={(e) => setcontent(e.target.value)}
                placeholder='Write your comment ....'
                rows={3} />
            <Button
                type='submit'
                disabled={isSubmitting || !content.trim()}
                className='self-end'>
                {isSubmitting ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                    <Send className='w-4 h-4 mr-2' />
                )}

                {isSubmitting ? "Posting..." : "Post Comment"}

            </Button>
        </form>
    )
}
