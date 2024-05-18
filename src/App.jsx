import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { setViewMode } from "./features/view/viewFeatures.slice";
import queryClient from "./services/queryClient";

import AppLayout from "./ui/AppLayout";
import ErrorFallback from "./ui/ErrorFallback";

import Home from "./pages/Home";
import Gaming from "./pages/Gaming";
import Projects from "./pages/Projects";
import Partners from "./pages/Partners";
import Stream from "./pages/Stream";
import News from "./pages/News";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Test from "./pages/Test";

const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorFallback />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gaming",
        element: <Gaming />,
      },
      {
        path: "/partners",
        element: <Partners />,
      },
      {
        path: "/stream",
        element: <Stream />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/tests",
        element: <Test />,
      },
    ],
  },
]);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setViewMode());
  }, [dispatch]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={routes} />
    </QueryClientProvider>
  );
};

export default App;
