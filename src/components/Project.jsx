import { useContext } from "react";
import Button from "./Button";
import { ThemeContext } from "../App";

export default function Project({ judul, deskripsi, link, image }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="py-2 px-52 md:px-34 sm:px-32 ">
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
          <img src={image} className="rounded-3xl w-52" />
        </div>
        <div className="">
          <h2 className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl">
            {judul}
          </h2>
          <p className="xl:text-xl lg:text-lg text-justify py-2">{deskripsi}</p>
          <a href={link}>
            <Button
              className={`text-xl md:text-sm sm:text-base rounded-xl  px-4 py-2 ${
                theme === "dark"
                  ? "bg-slate-800 text-white"
                  : "bg-white text-black"
              }`}
            >
              Lihat lebih
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
