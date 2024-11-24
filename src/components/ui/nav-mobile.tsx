"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { FaArrowRight, FaBars, FaDownload } from "react-icons/fa"
import TransitionLink from "./transition-link"

const navlinks = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "Technologies & Skills",
    link: "/technologies-skills"
  },
  {
    name: "Resume",
    link: "/resume"
  },
  {
    name: "Projects",
    link: "/projects"
  }
]

function NavMobile() {
  const pathname = usePathname()
  const [showNavbar, setShowNavbar] = useState(false)
  return (
    <div className="flex justify-end">
      <button className="text-2xl" onClick={() => setShowNavbar(true)}>
        <FaBars className="text-2xl text-white" />
      </button>

      <div
        className={`w-full bottom-0 min-h-screen fixed top-0 ${
          showNavbar ? "right-[-50%]" : "right-[-100%]"
        } sticky-header transition-all ease-out duration-300`}
      >
        <div className="p-3 mt-4">
          <button onClick={() => setShowNavbar(false)}>
            <FaArrowRight className="text-lg text-white" />
          </button>
        </div>
        <ul className="w-1/2 h-full flex flex-col justify-center items-center gap-3">
          {navlinks.map((navlink, index) => (
            <li
              key={index}
              onClick={() => setShowNavbar(false)}
              className={`font-semibold border-[1px] rounded px-4 py-1 ${
                pathname === navlink.link
                  ? "text-primarycolor border-primarycolor"
                  : "text-white border-transparent"
              } hover:text-primarycolor transition-all ease-out duration-200 `}
            >
              <TransitionLink href={navlink.link}>
                {navlink.name}
              </TransitionLink>
            </li>
          ))}
          <li>
            <Link href="/resume.pdf" target="_blank" download="/resume.pdf">
              <button className="text-white bg-primarycolor px-4  py-2 border-2 font-semibold rounded border-primarycolor transition-all duration-200 ease-out hover:bg-primarycolor hover:text-white flex justify-center items-center">
                <FaDownload className="inline-block mr-2" />
                Download CV
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavMobile
