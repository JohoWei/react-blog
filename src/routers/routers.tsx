import { createBrowserRouter } from "react-router";
import Home from "@/modules/Home/Home";
import Inbox from "@/modules/Inbox/Inbox";}

const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "/Inbox", Component: Inbox },
]);