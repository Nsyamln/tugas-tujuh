import { FaWhatsapp } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { useContext } from "react";
import { ThemeContext } from "../App";
export default function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme === "dark" ? "bg-slate-900 text-white" : "bg-black text-white"
      }
    >
      <footer className="px-20 ">
        <div className="flex justify-between py-12 xl:gap-6 lg:gap-8 md:gap-10 sm:gap-12">
          <div>
            <h1 className="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg font-medium">
              Maulina Inas Nasya
            </h1>
            <p className="text-xl md:text-sm sm:text-sm text-justify py-8">
              Seorang Web Developer dengan pengalaman dalam mengembangkan
              berbagai jenis aplikasi web
            </p>
          </div>
          <div>
            <h1 className="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg font-medium">
              SOCIAL
            </h1>
            <div className="flex justify-between gap-2  py-8">
              <a href="https://wa.me/6285723740462">
                <FaWhatsapp color="white" size={26} />
              </a>
              <a href="https://www.instagram.com/nsymln_/">
                <GrInstagram color="white" size={26} />
              </a>
              <BsGithub color="white" size={26} />
            </div>
          </div>
        </div>
        <hr />
        <p className="text-center text-xl sm:text-base md:text-lg py-6">
          &copy; 2023 Maulina Inas Nasya
        </p>
      </footer>
    </div>
  );
}
