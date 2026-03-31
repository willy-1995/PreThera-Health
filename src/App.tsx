import { useState } from "react";
import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Start from "./pages/start";
import Us from "./pages/us";
import BGM from "./pages/bgm";
import Studies from "./pages/publication";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Start />,
    },
    {
      path: "/start",
      element: <Start />,
    },
    {
      path: "/us",
      element: <Us />,
    },
    {
      path: "/bgm",
      element: <BGM />,
    },
    {
      path: "/publication",
      element: <Studies />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
