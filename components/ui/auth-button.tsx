"use client"

import { Github, Loader2 } from "lucide-react";
import { Button } from "./button";
import { signIn, useSession } from "@/lib/auth-client";
import { authClient } from "@/lib/auth-client";


export default function AuthButton() {

    const { data: session, isPending } = useSession();

    if (isPending) {
        return (
            <div className="flex items-center gap-2 text-muted-foreground">
                <Loader2 className="w-4 h-4 animate-spin" />
                Loading...
            </div>
        )
    }

    const signInBtn = async () => {
        await signIn.social({
            provider: 'github'
        })

    }
    return (
        <Button onClick={signInBtn}>
            <Github className="w-4 h-4 mr-2" />
            Sign in with GitHub
        </Button>
    )
}

