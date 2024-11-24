import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    name: "Email",
    img: "/img/email.avif",
    link: "https://github.com/nhathaohuynh/email-clone"
  },
  {
    name: "Trello",
    img: "/img/trello.png",
    link: "https://github.com/nhathaohuynh/trello"
  },

  {
    name: "Ecommerce ",
    img: "/img/ecommerce.jpg",
    link: "https://github.com/nhathaohuynh/e-commerce-architecture"
  },

  {
    name: "Learning management system",
    img: "/img/LMS.png",
    link: "https://github.com/nhathaohuynh/Online-learning-system"
  },

  {
    name: "Point of sale",
    img: "/img/POS.png",
    link: "https://github.com/nhathaohuynh/Final_NodeJS"
  },

  {
    name: "Food menu",
    img: "/img/food_menu.png",
    link: "https://github.com/nhathaohuynh/Food-menu"
  }
]

function page() {
  return (
    <div className="w-full h-full z-20 flex justify-center items-center">
      <div className="w-11/12 gap-4 mt-28 mb-6 h-full flex flex-col justify-center items-center">
        <div className="w-full gap-5 flex items-baseline justify-center flex-col">
          <div className="w-full grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => {
              return (
                <div
                  key={index}
                  className="border-gray-600/[0.5] p-5 bg-secondarycolor rounded-sm primary-glass-left"
                >
                  <Link href={project.link}>
                    <div className="w-full flex justify-center items-center ">
                      <Image
                        src={project.img}
                        alt={project.name}
                        width={300}
                        height={300}
                        className="w-[450] h-[300px] object-cover rounded-sm"
                      />
                    </div>
                    <div className="w-full mt-2">
                      <h3 className="text-2xl font-semibold">{project.name}</h3>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
