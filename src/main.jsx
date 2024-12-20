import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import ErrorPage from "./error-page";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Dashboard from "./dashboard/Dashboard";
import Content from "./dashboard/Content";
import CardPage from "./cardPage/CardPage";
import AppBarPage from "./components/appBar/AppBarPage";
import { store } from "./store";

import Editor from "./Page/Editor";
import PostList from "./Page/PostList";

import Home from "./Home";
import "./main.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home></Home>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <PostList />,
        },
        {
          path: "cardPage",
          element: <CardPage />,
        },
        {
          path: "header",
          element: <AppBarPage />,
        },
        {
          path: "postList",
          element: <PostList />,
        },
        {
          path: "editor",
          element: <Editor />,
        },
      ],
    },
    {
      path: "signIn",
      element: <SignIn />,
    },

    {
      path: "signUp",
      element: <SignUp />,
    },
  ],
  {
    basename: "/buzhuzhai/",
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
