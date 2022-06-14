import { Description } from "./Description";
import { Option, OptionSelected } from "./Option";
import { useEffect, useState } from "react";
import {
  Figma,
  Adobeillustrator,
  Adobephotoshop,
  Nodedotjs,
  Express,
  Mongodb,
  Javascript,
  Typescript,
  Graphql,
  Reactdotjs,
  Css3,
  Tailwindcss,
  Html5,
  Nextdotjs,
  Sass,
  Postgresql,
  Go,
} from "./Icons";
const Skills = () => {
  const [skill, setSkill] = useState("Frontend");

  return (
    <section className="px-6 w-full md:px-24 flex justify-center items-center gap-16 flex-col pt-36 md:pt-48">
      <div className="w-full gap-4 flex flex-row justify-start items-center">
        <div className="flex flex-col justify-center items-start gap-1">
          <h1 className="text-xl md:text-2xl font-bold">My Skills</h1>
          <h2 className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400">
            My skill set
          </h2>
        </div>
      </div>
      <div className="flex w-full flex-col justify-center bg-zinc-50 py-16 dark:bg-zinc-900  rounded-[30px]  gap-4 lg:flex-row">
        <div className="mb-4 flex w-full flex-row items-start justify-start gap-y-1  gap-x-4 overflow-scroll px-8 lg:px-12 lg:mb-0 lg:flex-col lg:overflow-hidden ">
          {skill === "Frontend" ? (
            <OptionSelected
              text="Frontend"
              handleClick={() => setSkill("Frontend")}
            />
          ) : (
            <Option text="Frontend" handleClick={() => setSkill("Frontend")} />
          )}
          {skill === "Backend" ? (
            <OptionSelected
              text="Backend"
              handleClick={() => setSkill("Backend")}
            />
          ) : (
            <Option text="Backend" handleClick={() => setSkill("Backend")} />
          )}
          {skill === "UI" ? (
            <OptionSelected text="UI" handleClick={() => setSkill("UI")} />
          ) : (
            <Option text="UI" handleClick={() => setSkill("UI")} />
          )}
          {skill === "UX" ? (
            <OptionSelected text="UX" handleClick={() => setSkill("UX")} />
          ) : (
            <Option text="UX" handleClick={() => setSkill("UX")} />
          )}

          {skill === "Softskills" ? (
            <OptionSelected
              text="SoftSkills"
              handleClick={() => setSkill("Softskills")}
            />
          ) : (
            <Option
              text="Softskills"
              handleClick={() => setSkill("Softskills")}
            />
          )}
        </div>
        <div className="px-8 lg:px-12  flex w-full flex-col items-start justify-center gap-2 lg:mt-0">
          {skill === "Frontend" && (
            <Description
              tools={[
                <Html5 key={1} />,
                <Css3 key={2} />,
                <Sass key={3} />,
                <Javascript key={4} />,
                <Reactdotjs key={5} />,
                <Nextdotjs key={6} />,
                <Typescript key={7} />,
                <Tailwindcss key={8} />,
              ]}
              text="
          when I am working on a new project, I am always thinking about how to make it look and feel better, and how to make it work better."
            />
          )}
          {skill === "Backend" && (
            <Description
              tools={[
                <Javascript key={1} />,
                <Typescript key={2} />,
                <Go key={3} />,
                <Nodedotjs key={4} />,
                <Express key={5} />,
                <Mongodb key={6} />,
                <Postgresql key={7} />,
                <Graphql key={8} />,
              ]}
              text="
            I love building backend services, and I am always thinking about how to make them better and more efficient."
            />
          )}
          {skill === "UI" && (
            <Description
              tools={[
                <Figma key={1} />,
                <Adobeillustrator key={2} />,
                <Adobephotoshop key={3} />,
              ]}
              text="
         I am always thinking about delivering an intuitive and easy to use interface."
            />
          )}

          {skill === "UX" && (
            <Description
              text="
          User exerience is the most important thing when it comes to designing a web application, and my main focus are accessibility, usability and performance."
            />
          )}

          {skill === "Softskills" && (
            <Description
              text="
          In addition to my technical skills, I also have a lot of soft skills, such as communication, teamwork, and leadership.
          Also I love Agile methodologies."
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
