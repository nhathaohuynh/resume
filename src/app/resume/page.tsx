import { BsFillBookmarkFill } from "react-icons/bs"

const experiences_data = [
  {
    company: 'Affina "Insurance company"',
    position: "Frontent developer & Backend developer",
    duration: "Mar 2024 - Nov 2024",
    technologies: [
      "TypeScript",
      "React",
      "Material UI",
      "Zustand",
      "React query",
      "Node.js",
      "Nest.js",
      "MariaDB",
      "Type orm",
      "Docker",
      "Github"
    ],
    responsibilities: [
      "Maintain and develop new features UI/UX of insurance management system like voucher, feedback, report, etc",
      "Calling API to get data from server and handle data before display to user or save to database",
      "In July 2024, I am responsible for developing API contract management system using nest.js and MariaDB",
      "Participate with back-end team java to migrate data from old system to new system",
      "Teamwork with other developers to solve problems and improve the system like BA team, testing team"
    ],
    reason_for_leaving:
      "I must be complete project in universaity to graduate and I have to focus on it"
  }
]

const education_data = [
  {
    school: "Ton Duc Thang University",
    major: "Major: Software Engineering",
    degree: "Degres: Bachelor's degree",
    duration: "Duration: 2020 - 2024",
    GPA: "GPA: 7.2 / 10",
    message: [
      "When I was a student, I learned a lot about job opportunities in information technology, and I decided to choose Web Programming since I enjoy customizing and drawing on my websites.",
      " I appreciate my school because it allows me to make new friends and learn with them. I've also stood at the lectern and taught my classmates about programming. "
    ]
  }
]

function page() {
  return (
    <div className="w-full h-full z-20 flex justify-center items-center">
      <div className="w-11/12 gap-4 mt-28 mb-7 h-full flex flex-col justify-center items-center">
        <div className="w-full gap-5 flex items-baseline justify-center flex-col">
          <div className="w-full">
            <div className="rounded-xl p-6 overflow-hidden primary-glass-left h-full">
              <div className="w-full z-30 relative">
                <h3 className="text-3xl font-semibold">Experience</h3>
              </div>
              <div className="py-5 z-30 w-10/12 mx-auto relative">
                <ul className="relative before:content-[' '] before:w-0.5 before:h-full before:bg-primarycolor before:absolute before:top-0 before:-left-10">
                  {experiences_data?.map((experience, index) => {
                    return (
                      <li
                        key={index}
                        className="flex gap-1 flex-col relative  before:content-[' '] before:w-5 before:h-5 before:rounded-full before:bg-white before:absolute before:top-0 before:-left-12  after:content-[' '] after:w-3 after:h-3 after:rounded-full after:bg-primarycolor after:absolute after:top-1 after:-left-11"
                      >
                        <h4 className="text-3xl font-semibold  text-primarycolor">
                          {experience.company}
                        </h4>
                        <h5 className="font-medium text-xl">
                          <span>{experience.position}</span>
                        </h5>
                        <span className="text-sm">
                          <h5 className="mb-1 text-sm">
                            <strong>Duration: </strong>
                            {experience.duration}
                          </h5>
                        </span>
                        <div className="flex items-start gap-1">
                          <h5 className="mb-1 text-sm">
                            <strong>Technologies: </strong>
                          </h5>
                          <ul className="flex gap-1 flex-wrap">
                            {experience?.technologies?.map(
                              (technology, index) => {
                                return (
                                  <li
                                    key={index}
                                    className="bg-gray-900 px-2 py-1 rounded-md text-sm"
                                  >
                                    <span>{technology}</span>
                                  </li>
                                )
                              }
                            )}
                          </ul>
                        </div>
                        <div>
                          <h5 className="mb-1 text-sm">
                            <strong>Responsibilities: </strong>
                          </h5>
                          <ul className="flex gap-2 flex-col">
                            {experience?.responsibilities?.map(
                              (responsibility, index) => {
                                return (
                                  <li
                                    key={index}
                                    className="ml-4 flex gap-2 items-baseline text-sm text-gray-400"
                                  >
                                    <div className="w-[6px] h-[6px] rounded-full bg-primarycolor"></div>
                                    <span className="flex-1">
                                      {responsibility}
                                    </span>
                                  </li>
                                )
                              }
                            )}
                          </ul>
                        </div>
                        <div className="flex gap-2 items-baseline">
                          <h5 className="mb-1 text-sm">
                            <strong>Reason leaving: </strong>
                          </h5>
                          <div className="flex-1">
                            <span className="text-sm text-gray-400">
                              {experience.reason_for_leaving}
                            </span>
                          </div>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="rounded-xl p-6 overflow-hidden primary-glass-left">
              <div className="w-full z-30 relative">
                <h3 className="text-3xl font-semibold">Education</h3>
              </div>
              <div className="py-5 z-30 w-10/12 mx-auto relative">
                <ul className="relative before:content-[' '] before:w-0.5 before:h-full before:bg-primarycolor before:absolute before:top-0 before:-left-10">
                  {education_data?.map((edu, index) => {
                    return (
                      <li
                        key={index}
                        className="flex gap-1 flex-col relative  before:content-[' '] before:w-5 before:h-5 before:rounded-full before:bg-white before:absolute before:top-0 before:-left-12  after:content-[' '] after:w-3 after:h-3 after:rounded-full after:bg-primarycolor after:absolute after:top-1 after:-left-11"
                      >
                        <h4 className="text-3xl font-semibold  text-primarycolor">
                          {edu.school}
                        </h4>
                        <h5 className="font-medium text-sm">
                          <span>{edu.major}</span>
                        </h5>

                        <h5 className="font-medium text-sm">
                          <span>{edu.degree}</span>
                        </h5>

                        <h5 className="font-medium text-sm">
                          <span>{edu.duration}</span>
                        </h5>

                        <h5 className="font-medium text-sm">
                          <span>{edu.GPA}</span>
                        </h5>
                        <div>
                          {edu.message.map((msg, index) => {
                            return (
                              <div
                                key={index}
                                className="text-sm text-gray-400 flex items-center gap-2"
                              >
                                <BsFillBookmarkFill className="text-primarycolor" />
                                <span> {msg}</span>
                              </div>
                            )
                          })}
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
