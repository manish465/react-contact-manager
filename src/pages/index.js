import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Users from "./Users";
import About from "./About";
import Contacts from "./Contacts";
import AddContact from "./AddContact";

export const pageMap = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/about", element: <About /> },
    { path: "/register", element: <Register /> },
    { path: "/user/:userId/dashboard", element: <Dashboard /> },
    { path: "/user/:userId/users", element: <Users /> },
    { path: "/user/:userId/contacts", element: <Contacts /> },
    { path: "/user/:userId/contacts/add", element: <AddContact /> },
];
