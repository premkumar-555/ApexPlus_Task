import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import { routes_data } from "./Routes";

  const router = createBrowserRouter([
    ...routes_data
  ]);

  export default router;