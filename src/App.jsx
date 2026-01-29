import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Paste from "./components/Paste";
import ViewPaste from "./components/ViewPaste";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="w-full min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <div className="flex-grow flex flex-col">
          <Home />
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/pastes",
    element: (
      <div className="w-full min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <div className="flex-grow flex flex-col">
          <Paste />
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/pastes/:id",
    element: (
      <div className="w-full min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <div className="flex-grow flex flex-col">
          <ViewPaste />
        </div>
        <Footer />
      </div>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Analytics />
    </>
  );
}

export default App;
