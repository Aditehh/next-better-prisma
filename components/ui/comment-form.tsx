"use client"
import { useRouter } from 'next/navigation'
import { Textarea } from './textarea'
import { useState } from 'react'

export default function CommentForm() {
    const [content, setcontent] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const router = useRouter();
  return (
    <form className='flex flex-col gap-3' >
        <Textarea />
    </form>
  )
}
