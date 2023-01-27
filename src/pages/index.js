import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Users from "./Users";
import About from "./About";
import Contacts from "./Contacts";

export const pageMap = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/about", element: <About /> },
    { path: "/register", element: <Register /> },
    { path: "/:userId/dashboard", element: <Dashboard /> },
    { path: "/:userId/users", element: <Users /> },
    { path: "/:userId/contacts", element: <Contacts /> },
];
