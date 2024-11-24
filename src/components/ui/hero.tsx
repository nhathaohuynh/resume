import Image from "next/image"
import Link from "next/link"
import {
  FaDownload,
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaTwitter
} from "react-icons/fa"
import Counter from "./counter"
import { FaPlus } from "react-icons/fa6"

function Hero() {
  return (
    <div className="w-full h-full flex justify-evenly items-center flex-col z-20">
      <div className="w-11/12 flex justify-center items-center mt-7">
        <div className="flex-1 md:mt-0 mt-16">
          <div className="text_container">
            <h5 className="text-gray-300">Hi there!</h5>
            <h2 className="text-7xl font-bold">
              I am <span className="text-primarycolor">Kelvin Hao</span>,
              <br /> a Web Developer
            </h2>
            <p className="py-4 text-gray-400 tracking-wide">
              Welcome to look at my profile!
              <strong className="text-primarycolor">
                {" "}
                In 1+ years of JavaScript and Typescript experience
              </strong>
              . I am passionate about creating seamless user experiences and
              believe that simplifying code leads to more agile applications. I
              am good at teamwork, friendly, and easy to approach.
            </p>
            <Link
              href="/resume.pdf"
              download="/resume.pdf"
              target="_blank"
              className="md:block hidden"
            >
              <button className="text-primarycolor bg-transparent px-4  py-2 border-2 font-semibold rounded border-primarycolor transition-all duration-200 ease-out hover:bg-primarycolor hover:text-white flex justify-center items-center">
                <FaDownload className="inline-block mr-2" />
                Download CV
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:flex hidden flex-1 justify-center items-center">
          <div className="hero_image_container w-full max-w-md bg-blue-300 p-4 rounded-3xl border border-gray-600/[0.5] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] flex justify-center items-center">
            <Image
              src={"/img/hero.jpeg"}
              alt="avatar of Kelvin Hao"
              width={400}
              height={400}
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div className="w-11/12 flex xl:flex-row flex-col justify-center items-center gap-10">
        <div className="lg:w-3/6 w-full max-h-[100px] h-[100px] bg-secondarycolor rounded-3xl py-[30px] border border-gray-600/[0.5]  shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex items-center justify-around">
          <div className="flex items-center justify-center gap-3 w-full">
            <div className="text-primarycolor md:text-5xl text-3xl font-bold flex items-center justify-center">
              <Counter from={0} to={1} />
              <FaPlus className="md:text-2xl text-lg" />
            </div>
            <div>
              <h4 className="md:text-lg font-medium text-xs text-gray-400">
                Years Of <br />
                Experience
              </h4>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 w-full">
            <div className="text-primarycolor md:text-5xl text-3xl font-bold flex items-center justify-center">
              <Counter from={0} to={20} />
              <FaPlus className="md:text-2xl text-lg" />
            </div>
            <div>
              <h4 className="md:text-lg font-medium text-xs text-gray-400">
                Personal Projects <br /> Completed
              </h4>
            </div>
          </div>
        </div>

        <div className="lg:w-3/6 w-full max-h-[100px] h-[100px] bg-secondarycolor rounded-3xl py-[30px] border border-gray-600/[0.5]  shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex items-center justify-around">
          <ul className="flex items-center justify-around w-full">
            <li>
              <Link
                href={"https://www.facebook.com/nhathao.huynh.73997/"}
                target="_blank"
              >
                <button className="md:w-16 md:h-16 w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center hover:bg-primarycolor transition-all duration-200 ease-out">
                  <FaFacebook className="md:text-4xl tex-3xl text-white" />
                </button>
              </Link>
            </li>

            <li>
              <Link href={"https://github.com/nhathaohuynh"} target="_blank">
                <button className="md:w-16 md:h-16 w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center  hover:bg-primarycolor transition-all duration-200 ease-out">
                  <FaGithub className="md:text-4xl tex-3xl text-white" />
                </button>
              </Link>
            </li>

            <li>
              <Link href={""} target="_blank">
                <button className="md:w-16 md:h-16 w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center  hover:bg-primarycolor transition-all duration-200 ease-out">
                  <FaLinkedinIn className="md:text-4xl tex-3xl text-white" />
                </button>
              </Link>
            </li>

            <li>
              <Link href={""} target="_blank">
                <button className="md:w-16 md:h-16 w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center  hover:bg-primarycolor transition-all duration-200 ease-out">
                  <FaTwitter className="md:text-4xl tex-3xl text-white" />
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Hero
