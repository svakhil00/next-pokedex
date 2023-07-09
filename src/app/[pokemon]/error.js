'use client'

import Link from "next/link"

export default function Error() {
    return (
        <div>
            <p><Link href="/">Home</Link></p>
            <h1>Pokemon not found</h1>
        </div>
    )
}