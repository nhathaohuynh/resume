"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { MouseEvent } from "react"

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function TransitionLink({
  href,
  children
}: {
  href: string
  children: React.ReactNode
}) {
  const router = useRouter()

  const handleTransition = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const body = document.querySelector("body")!
    router.push(href)
    body.classList.add("page-transition")
    body.classList.add("overflow-hidden")
    await sleep(300)
    body.classList.remove("page-transition")
    await sleep(300)
    body.classList.remove("overflow-hidden")
  }

  return (
    <Link href={href} onClick={handleTransition}>
      {children}
    </Link>
  )
}

export default TransitionLink
