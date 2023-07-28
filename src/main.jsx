import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";

export const pages = [
  {
    path: "/",
    element: <Home />,
    title: "Home",
  },
  {
    path: "/project",
    title: "Project",
  },
  {
    path: "/about",
    title: "About",
  },
];

const router = createBrowserRouter([
  {
    element: <App />,
    children: pages,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
