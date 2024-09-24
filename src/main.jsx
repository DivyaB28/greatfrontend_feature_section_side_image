import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/feature-side-image/",
    element: <Root side="left" />,
  },
  {
    path: "/feature-side-image/right",
    element: <Root side="right" />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
