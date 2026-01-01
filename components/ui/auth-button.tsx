"use client"

import { Github } from "lucide-react";
import { Button } from "./button";

export default function AuthButton() {

    const signInBtn = () => {

    }
    return (
        <Button onClick={signInBtn}>
            <Github className="w-4 h-4 mr-2" />
            Sign in with GitHub
        </Button>
    )
}

