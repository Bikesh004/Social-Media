import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Componets/Routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PostList from "./Componets/PostList.jsx";
import CreatePost from "./Componets/CreatePost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList /> },
      { path: "/create-post", element: <CreatePost /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
