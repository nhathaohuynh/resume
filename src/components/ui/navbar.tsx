"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SiGithub } from "react-icons/si"
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

function Navbar() {
  const pathname = usePathname()
  return (
    <div className="w-full h-full flex items-center gap-3">
      <ul className="w-full h-full flex justify-center items-center gap-3">
        {navlinks.map((navlink, index) => (
          <li
            key={index}
            className={`md:text-lg text-sm font-semibold border-[1px] rounded px-3 py-1 ${
              pathname === navlink.link
                ? "text-primarycolor border-primarycolor"
                : "text-white border-transparent"
            } hover:text-primarycolor transition-all ease-out duration-200 `}
          >
            <TransitionLink href={navlink.link}>{navlink.name}</TransitionLink>
          </li>
        ))}
      </ul>
      <Link
        href="https://github.com/nhathaohuynh"
        rel="noopener noreferrer"
        target="_blank"
        className=""
      >
        <button className="bg-primarycolor text-white px-4 py-2 rounded-lg hover:opacity-75 transition-all duration-200 ease-out flex items-center justify-center gap-2">
          <SiGithub className="text-2xl" />
          Github
        </button>
      </Link>
    </div>
  )
}

export default Navbar
