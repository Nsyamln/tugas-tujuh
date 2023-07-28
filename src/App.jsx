import { createContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import Home from "./pages/Home";
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
        <Home />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
