import Project from "../components/Project";
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { BsGithub } from "react-icons/bs";
import { SiMysql } from "react-icons/si";
import { useContext } from "react";
import { ThemeContext } from "../App";
export default function Home() {
  const projects = [
    {
      id: 1,
      judul: "Integer Store",
      image: "/icons8-laptop-100.png",
      deskripsi: "Sebuah marketplace yang menjual produk-produk Apple.",
      link: "https://uts-react-six.vercel.app/",
    },
    {
      id: 2,
      judul: "Program CRUD | Sekolah",
      image: "/icons8-laptop-100.png",
      deskripsi: "Program CRUD Java sederhana dengan framework Spring Boot.",
      link: "https://uts-pelatihan-java-lanjutan.vercel.app/",
    },
  ];
  const name = "I'm Maulina Inas Nasya";
  const { theme } = useContext(ThemeContext);
  return (
    <div
      id="home"
      className={
        theme === "dark" ? "bg-slate-800 text-white" : "bg-zinc-200 text-black"
      }
    >
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
          Seorang Web Developer Junior
        </p>
      </div>
      <div
        id="project"
        className={`pb-12 ${theme === "dark" ? "bg-slate-800" : "bg-zinc-100"}`}
      >
        <h1 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-center font-medium py-10">
          Projects
        </h1>
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
      <div id="about">
        <div className="px-20 pb-4">
          <div className="py-10 pb-10">
            <h1 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-center font-medium ">
              Tentang Saya
            </h1>
            <p className="xl:text-2xl lg:text-xl md:text-lg sm:text-base text-center  py-6">
              Di sini Anda akan menemukan informasi lebih lanjut tentang saya,
              apa yang saya lakukan, dan keterampilan saya saat ini terutama
              dalam hal pemrograman dan teknologi.
            </p>
          </div>
          <div className="flex gap-10">
            <div>
              <h2 className="xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl font-semibold pb-6">
                Kenali saya lebih jauh!
              </h2>
              <p className="xl:text-2xl lg:text-xl md:text-lg sm:text-base text-justify">
                Saya seorang Frontend Web Developer yang membangun bagian
                Front-end dari Website dan Aplikasi Web yang mengarah pada
                kesuksesan produk secara keseluruhan. Lihat beberapa hasil kerja
                saya di bagian Proyek.
              </p>
              <p className="xl:text-2xl lg:text-xl md:text-lg sm:text-base text-justify  ">
                Saya juga suka berbagi konten terkait hal-hal yang telah saya
                pelajari selama bertahun-tahun dalam pengembangan Web sehingga
                dapat membantu anggota komunitas pengembang lainnya. Silakan
                terhubung atau mengikuti saya di <a href="/">LinkedIn</a> di
                mana saya memposting konten berguna terkait pengembangan Web dan
                pemrograman.
              </p>
              <p className="xl:text-2xl lg:text-xl md:text-lg sm:text-base text-justify  pb-10">
                Saya terbuka untuk kesempatan kerja di mana saya dapat
                berkontribusi, belajar, dan berkembang. Jika Anda memiliki
                kesempatan yang baik yang sesuai dengan keterampilan dan
                pengalaman saya, jangan ragu untuk menghubungi saya.
              </p>
            </div>
          </div>
          <div>
            <h2 className="xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl font-semibold ">
              Keahlian
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
