import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Paste from "./components/Paste";
import ViewPaste from "./components/ViewPaste";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { supabase } from "./supabase";
import { setSession } from "./redux/authSlice";

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
  const dispatch = useDispatch();

  useEffect(() => {
    // 1. Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      dispatch(setSession(session));
    });

    // 2. Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      dispatch(setSession(session));
    });

    return () => subscription.unsubscribe();
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
      <Analytics />
    </>
  );
}

export default App;
