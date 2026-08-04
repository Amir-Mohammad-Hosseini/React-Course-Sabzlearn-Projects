import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./../public/css/index.css";
import "./../public/css/fonts.css";
import { RouterProvider } from "react-router";
import router from "./lib/routes.jsx";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./lib/TanstackQuery/queryClient.js";

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </QueryClientProvider>,
);
