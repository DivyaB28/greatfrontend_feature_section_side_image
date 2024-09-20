import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Root from "./routes/root";

const router = createHashRouter([
  {
    path: "/",
    element: <Root side="left" />,
  },
  {
    path: "/right",
    element: <Root side="right" />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
