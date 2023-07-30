import { useContext } from "react";
import Button from "./Button";
import { LanguageContext, ThemeContext, projects, strings } from "../App";

export default function Project() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  return (
    <div className=" px-52 md:px-34 sm:px-32 ">
      {projects.map((project, i) => (
        <div key={i} className="pb-6">
          <div
            className={`flex flex-col  gap-6 px-4 py-6 rounded-xl md:flex-row ${
              theme === "dark"
                ? "bg-slate-600 text-white hover:bg-slate-500"
                : "bg-zinc-200 text-black hover:bg-gray-100"
            }`}
          >
            <div
              className={`flex justify-center px-8 py-0 rounded-xl ${
                theme === "dark" ? "bg-zinc-200 " : "bg-white"
              }`}
            >
              <img src={project.image} className="rounded-3xl w-52" />
            </div>
            <div className="">
              <h2 className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl">
                {project.judul[language]}
              </h2>
              <p className="xl:text-xl lg:text-lg text-justify py-2">
                {project.deskripsi[language]}
              </p>
              <a href={project.link}>
                <Button
                  className={`text-xl md:text-sm sm:text-base rounded-xl  px-4 py-2 ${
                    theme === "dark"
                      ? "bg-slate-800 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {strings[language].tombol}
                </Button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
