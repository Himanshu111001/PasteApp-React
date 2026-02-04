import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Paste from "./components/Paste";
import ViewPaste from "./components/ViewPaste";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import { Analytics } from "@vercel/analytics/react";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { supabase } from "./supabase";
import { setSession } from "./redux/authSlice";
import { setPastes } from "./redux/pasteSlice";

const router = createBrowserRouter([
  // ... existing routes
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
  {
    path: "/privacy",
    element: (
      <div className="w-full min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <div className="flex-grow flex flex-col">
          <Privacy />
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/terms",
    element: (
      <div className="w-full min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <div className="flex-grow flex flex-col">
          <Terms />
        </div>
        <Footer />
      </div>
    ),
  },
]);


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCloudPastes = async (userId) => {
      const { data, error } = await supabase
        .from('pastes')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (data && !error) {
        const formattedPastes = data.map(p => ({
          ...p,
          _id: p.id,
          createdAt: p.created_at
        }));
        dispatch(setPastes(formattedPastes));
      }
    };

    // 1. Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      dispatch(setSession(session));
      if (session?.user) {
        fetchCloudPastes(session.user.id);
      }
    });

    // 2. Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      dispatch(setSession(session));
      if (session?.user) {
        fetchCloudPastes(session.user.id);
      }
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
