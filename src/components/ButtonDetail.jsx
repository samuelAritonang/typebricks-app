"use client"

import { useRouter } from "next/navigation"

export default function ButtonDetailComponent({index}) {

    const router = useRouter()

    return (
        <button onClick={() => { router.push(`/dashboard/event/${index}/detail`) }}>
            detail
        </button>
    )
}