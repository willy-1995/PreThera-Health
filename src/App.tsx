import "./App.scss";
// 1. Importiere createHashRouter statt createBrowserRouter
import { createHashRouter, RouterProvider } from "react-router-dom";
import Start from "./pages/start";
import Us from "./pages/us";
import BGM from "./pages/bgm";
import Studies from "./pages/publication";

function App() {
  // 2. Nutze createHashRouter
  const router = createHashRouter([
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
  // HINWEIS: Beim HashRouter brauchst du KEINEN basename!
  // Er ignoriert alles vor dem # automatisch.

  return <RouterProvider router={router} />;
}

export default App;
