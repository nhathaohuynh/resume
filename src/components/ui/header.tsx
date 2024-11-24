"use client"
import Link from "next/link"
import Navbar from "./navbar"
import NavMobile from "./nav-mobile"
import { useEffect, useState } from "react"

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        console.log("scroll")
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center ${
        scrolled ? "sticky-header" : "sticky-header"
      }`}
    >
      <div className={`w-11/12 flex  py-4 justify-between items-center`}>
        <div className="flex-1">
          <Link href={"/"}>
            <h4 className="text-xl font-semibold text-left">
              KelvinHao
              <span className="text-primarycolor">.</span>
            </h4>
          </Link>
        </div>
        <div className="flex-2">
          <div className="md:block w-full hidden">
            <Navbar />
          </div>
          <div className="md:hidden w-full block">
            <NavMobile />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
