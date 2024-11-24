import { BiCheck } from "react-icons/bi"
import {
  SiCss3,
  SiDocker,
  SiExpress,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si"

const technologies = [
  {
    name: "JavaScript",
    icon: <SiJavascript color="Yellow" />
  },
  {
    name: "TypeScript",
    icon: <SiTypescript color="blue" />
  },

  {
    name: "HTML5",
    icon: <SiHtml5 color="red" />
  },

  {
    name: "CSS3",
    icon: <SiCss3 className="text-blue-700" />
  },

  {
    name: "Tailwindcss",
    icon: <SiTailwindcss className="text-blue-400" />
  },

  {
    name: "React.js",
    icon: <SiReact className="text-blue-500" />
  },

  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-blue-700" />
  },

  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-500" />
  },

  {
    name: "Express.js",
    icon: <SiExpress className="text-green-400" />
  },

  {
    name: "Nest.js",
    icon: <SiNestjs className="text-red-600" />
  },

  {
    name: "Prisma",
    icon: <SiPrisma className="text-blue-700" />
  },

  {
    name: "Postgresql",
    icon: <SiPostgresql className="text-blue-700" />
  },

  {
    name: "Mongoose",
    icon: <SiMongoose className="text-red-600" />
  },

  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500" />
  },

  {
    name: "Github",
    icon: <SiGithub className="text-black" />
  },

  {
    name: "Docker",
    icon: <SiDocker className="text-blue-500" />
  }
]

function page() {
  return (
    <div className="w-full z-20 flex justify-center items-center flex-col py-4 h-full ">
      <div className="w-11/12 flex justify-center mt-28 mx-auto flex-col primary-glass-left p-2 py-4 rounded-md">
        <h1 className="text-white text-xl font-semibold">Technologies</h1>
        <div className="w-full flex mt-4 gap-5 flex-wrap justify-center">
          {technologies.map((technology, index) => {
            return (
              <div
                className="hover:bg-primarycolor hover:cursor-pointer transition-all duration-200 ease-out flex justify-center items-center gap-4 bg-secondarycolor p-4 rounded-lg shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] max-w-[200px] w-[200px]"
                key={index}
              >
                <div className="text-5xl font-bold flex items-center justify-center">
                  {technology.icon}
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">
                    {technology.name}
                  </h4>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="w-11/12 flex justify-center mt-8 flex-col primary-glass-left p-2 py-4 rounded-md">
        <h1 className="text-white text-xl font-semibold">Skills</h1>
        <div className="w-full flex mt-4 gap-5 flex-wrap flex-col">
          <div className="flex gap-1 items-center">
            <BiCheck className="text-2xl text-green-500" />
            <h4>Testing & Debugging</h4>
          </div>

          <div className="flex gap-1 items-center">
            <BiCheck className="text-2xl text-green-500" />
            <h4>Git, Github for Teamwork</h4>
          </div>

          <div className="flex gap-1 items-center">
            <BiCheck className="text-2xl text-green-500" />
            <h4>Responsive Web Design</h4>
          </div>

          <div className="flex gap-1 items-center">
            <BiCheck className="text-2xl text-green-500" />
            <h4>Agile Development & Scrum</h4>
          </div>

          <div className="flex gap-2 justify-center flex-col">
            <div className=" flex gap-1 items-center mb-1">
              <BiCheck className="text-2xl text-green-500" />
              <h4>English for Work!</h4>
            </div>
            <ul className="flex flex-col gap-2">
              <li className="flex items-baseline gap-3 ">
                <span className="ml-8 block w-[8px] h-[8px] rounded-full bg-primarycolor"></span>
                <p className="flex-1 text-gray-400 text-sm">
                  For reading I can comfortably read and interpret
                  documentation, project specifications, and work totally in
                  English.
                </p>
              </li>
              <li className="flex items-baseline gap-3">
                <span className="ml-8 block w-[8px] h-[8px] rounded-full bg-primarycolor"></span>
                <p className="flex-1 text-gray-400 text-sm">
                  For speaking I am capable of basic communication and am always
                  striving to improve everyday
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
