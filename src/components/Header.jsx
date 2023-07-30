import ThemeButton from "./ThemeButton";
import { useContext } from "react";
import { LanguageContext, ThemeContext, headers } from "../App";

export default function Header() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  return (
    <header
      className={`sticky top-0 flex flex-col  md:flex-row items-center h-28  justify-between px-10 py-4 w-full ${
        theme === "dark" ? "bg-slate-900" : "bg-gray-100"
      }`}
    >
      <div className="flex  items-center justify-between">
        <img src="/icons-female-user-96.png" className="md:w-14 sm:w-12" />
        <p
          className={` lg:text-xl md:text-xl sm:text-xl font-medium  ${
            theme === "dark" ? "text-gray-100" : "text-gray-900"
          }`}
        >
          Maulina Inasya
        </p>
      </div>

      <nav>
        <ul
          className={`flex   lg:gap-4 md:gap-4 text-xl sm:gap-6  ${
            theme === "dark" ? "text-gray-100" : "text-gray-900"
          }`}
        >
          <li>
            <ThemeButton />
          </li>
          <li className="hover:font-bold">
            <a href="#home">{headers[language].home}</a>
          </li>
          <li className="hover:font-extrabold">
            <a href="#project">{headers[language].project}</a>
          </li>
          <li className="hover:font-extrabold">
            <a href="#about">{headers[language].about}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
