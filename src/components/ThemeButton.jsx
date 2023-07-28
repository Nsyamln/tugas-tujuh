import { useContext } from "react";
import { ThemeContext } from "../App";
import Button from "./Button";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? <MdDarkMode /> : <MdOutlineLightMode />}
    </Button>
  );
}
