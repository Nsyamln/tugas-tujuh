import ThemeButton from "./ThemeButton";
import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Header() {
  const { theme } = useContext(ThemeContext);
  return (
    <header
      className={`sticky top-0 flex flex-col md:flex-row items-center h-28 md:h-20  justify-between px-20 py-4 w-full ${
        theme === "dark" ? "bg-slate-900" : "bg-gray-100"
      }`}
    >
      <div className="flex   items-center justify-between">
        <img src="/icons-female-user-96.png" className="md:w-14 sm:w-12" />
        <p
          className={`lg:text-2xl md:text-xl sm:text-xl font-medium  ${
            theme === "dark" ? "text-gray-100" : "text-gray-900"
          }`}
        >
          Maulina Inas Nasya
        </p>
      </div>

      <nav>
        <ul
          className={`flex gap-20 md:gap-10 text-xl sm:gap-6  ${
            theme === "dark" ? "text-gray-100" : "text-gray-900"
          }`}
        >
          <li>
            <ThemeButton />
          </li>
          <li className="hover:font-bold">
            <a href="#home">Home</a>
          </li>
          <li className="hover:font-extrabold">
            <a href="#project">Project</a>
          </li>
          <li className="hover:font-extrabold">
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
