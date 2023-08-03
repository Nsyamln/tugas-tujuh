import { createContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import Home from "./pages/Home";
import { useRef } from "react";
import { useEffect } from "react";
import Button from "./components/Button";
import { BsArrowUpCircle } from "react-icons/bs";
export const ThemeContext = createContext({
  Theme: null,
  setTheme: () => {},
});

export const LanguageContext = createContext({
  language: null,
  setLanguage: () => {},
});

export const headers = {
  id: {
    home: "Beranda",
    project: "Projek",
    about: "Tentang",
  },
  en: {
    home: "Home",
    project: "Project",
    about: "About",
  },
};

export const projects = [
  {
    id: 1,
    judul: {
      id: "Toko Integer",
      en: "Integer Store",
    },
    image: "/icons8-laptop-100.png",
    deskripsi: {
      id: "Sebuah marketplace yang menjual produk-produk Apple.",
      en: "A marketplace that sells Apple products.",
    },
    link: "https://uts-react-six.vercel.app/",
  },
  {
    id: 2,
    judul: {
      id: "Program CRUD | Sekolah",
      en: "CRUD Program | School",
    },
    image: "/icons8-laptop-100.png",
    deskripsi: {
      id: "Program CRUD Java sederhana dengan framework Spring Boot.",
      en: "A simple Java CRUD program with the Spring Boot framework.",
    },
    link: "https://uts-pelatihan-java-lanjutan.vercel.app/",
  },
];

export const strings = {
  id: {
    tagline: "Seorang Web Developer Junior",
    projects: "Projek",
    about: "Tentang Saya",
    t1: "Di sini Anda akan menemukan informasi lebih lanjut tentang saya, apa yang saya lakukan, dan keterampilan saya saat ini terutama dalam hal pemrograman dan teknologi.",
    kenali: "Kenali saya lebih jauh!",
    k1: "Saya seorang Frontend Web Developer yang membangun bagian Front-end dari Website dan Aplikasi Web yang mengarah pada kesuksesan produk secara keseluruhan. Lihat beberapa hasil kerja saya di bagian Proyek.",
    k2: "Saya juga suka berbagi konten terkait hal-hal yang telah saya pelajari selama bertahun-tahun dalam pengembangan Web sehingga dapat membantu anggota komunitas pengembang lainnya. Silakan terhubung atau mengikuti saya di di mana saya memposting konten berguna terkait pengembangan Web dan pemrograman.",
    k3: "Saya terbuka untuk kesempatan kerja di mana saya dapat berkontribusi, belajar, dan berkembang.",
    skill: "Keahlian",
    footer:
      "Seorang Web Developer dengan pengalaman dalam mengembangkan berbagai jenis aplikasi web",
    tombol: "Lihat Lebih",
  },
  en: {
    tagline: "a junior web developer!",
    projects: "Projects",
    about: "About Me",
    t1: "Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology",
    kenali: "Get to know me!",
    k1: "I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.",
    k2: "I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming",
    k3: "I'm open to Job opportunities where I can contribute, learn and grow.",
    skill: "My Skill",
    footer:
      "A Web Developer with experience in developing various types of web applications",
    tombol: "Know More",
  },
};

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("id");

  useEffect(() => {
    theme === "dark"
      ? console.log("Berhasil mengubah tema gelap")
      : console.log("Berhasil mengubah tema terang");
  });

  const LinkRef = useRef(null);
  const Scroll = () => {
    LinkRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div ref={LinkRef}>
          <Header />
          <Home />
          <Footer />
          <div className="flex justify-end fixed bottom-0 right-0 mb-5">
            <Button
              onClick={Scroll}
              className=" absolute bottom-0 right-0 mt-5 mr-4"
            >
              <BsArrowUpCircle
                size={34}
                className={theme === "dark" ? " text-white" : " text-black"}
              />
            </Button>
          </div>
        </div>
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
}
