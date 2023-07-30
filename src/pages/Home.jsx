import Project from "../components/Project";
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { BsGithub } from "react-icons/bs";
import { SiMysql } from "react-icons/si";
import { useContext } from "react";
import { LanguageContext, ThemeContext, strings } from "../App";
export default function Home() {
  const name = "I'm Maulina Inas Nasya";
  const { theme } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <div
      id="home"
      className={
        theme === "dark" ? "bg-slate-800 text-white" : "bg-zinc-200 text-black"
      }
    >
      <select
        onChange={(e) => {
          setLanguage(e.target.value);
        }}
        className="bg-transparent text-lg  pl-20 py-5 "
      >
        <option className="text-black" value={"id"}>
          Indonesia
        </option>
        <option className="text-black" value={"en"}>
          English
        </option>
      </select>
      <div className="text-center px-5 items-center flex flex-col gap-12 py-40 xl:pb-40 lg:pb-20 md:pb-16 sm:pb-12">
        <img
          className="rounded-full "
          width={250}
          src="/profile.jpeg"
          alt="my photos"
        />
        <h1 className="font-sans xl:text-8xl lg:text-6xl md:text-5xl sm:text-4xl ">
          Hej, <br />
          {name}
        </h1>
        <p className="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg">
          {strings[language].tagline}
        </p>
      </div>
      <div
        id="project"
        className={`pb-12 ${theme === "dark" ? "bg-slate-800" : "bg-zinc-100"}`}
      >
        <h1 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-center font-medium py-10">
          {strings[language].projects}
        </h1>
        <Project />
      </div>
      <div id="about">
        <div className="px-20 pb-4">
          <div className="py-10 pb-10">
            <h1 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-center font-medium ">
              {strings[language].about}
            </h1>
            <p className="xl:text-2xl lg:text-xl md:text-lg sm:text-base text-center  py-6">
              {strings[language].t1}
            </p>
          </div>
          <div className="flex gap-10">
            <div>
              <h2 className="xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl font-semibold pb-6">
                {strings[language].kenali}
              </h2>
              <p className="xl:text-2xl lg:text-xl md:text-lg sm:text-base text-justify">
                {strings[language].k1}
              </p>
              <p className="xl:text-2xl lg:text-xl md:text-lg sm:text-base text-justify  ">
                {strings[language].k2}
              </p>
              <p className="xl:text-2xl lg:text-xl md:text-lg sm:text-base text-justify  pb-10">
                {strings[language].k3}
              </p>
            </div>
          </div>
          <div>
            <h2 className="xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl font-semibold ">
              {strings[language].skill}
            </h2>
            <div className="text-2xl md:text-xl sm:text-base flex gap-2 flex-wrap py-8 lg: justify-center">
              <div
                className={`rounded-xl  px-4 md:px-2  md:py-1 py-3 flex justify-between gap-4 items-center ${
                  theme === "dark"
                    ? "bg-slate-600 text-white"
                    : "bg-gray-300 text-black"
                }}`}
              >
                <DiJavascript1 size={52} />
                Javascript
              </div>
              <div
                className={` rounded-xl px-4 md:px-2  md:py-1 py-3 flex justify-between gap-4 items-center ${
                  theme === "dark"
                    ? "bg-slate-600 text-white"
                    : "bg-gray-300 text-black"
                }}`}
              >
                <BsGithub size={48} />
                GIT & GitHub
              </div>
              <div
                className={`rounded-xl px-6 md:px-3  md:py-1 py-3 flex justify-between gap-4 items-center ${
                  theme === "dark"
                    ? "bg-slate-600 text-white"
                    : "bg-gray-300 text-black"
                }}`}
              >
                <FaReact size={48} />
                ReactJS
              </div>
              <div
                className={` rounded-xl px-2 md:py-1 py-3 flex justify-between gap-4 items-center ${
                  theme === "dark"
                    ? "bg-slate-600 text-white"
                    : "bg-gray-300 text-black"
                }}`}
              >
                <FaHtml5 size={50} />
                HTML
              </div>
              <div
                className={`  rounded-xl px-2 md:py-1 py-3 flex justify-between gap-4 items-center ${
                  theme === "dark"
                    ? "bg-slate-600 text-white"
                    : "bg-gray-300 text-black"
                }}`}
              >
                <FaCss3 size={50} />
                CSS
              </div>
              <div
                className={` rounded-xl px-4 md:px-2 md:py-1 py-3 flex justify-between gap-4 items-center ${
                  theme === "dark"
                    ? "bg-slate-600 text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                <SiMysql size={52} />
                MySQL
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
