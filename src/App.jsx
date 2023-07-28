import { createContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
export const ThemeContext = createContext({
  Theme: null,
  setTheme: () => {},
});
export default function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
