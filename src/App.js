import "./styles.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import TokenContext from "./context/TokenContext";

const App = () => {
    return (
        <BrowserRouter>
            <TokenContext>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/:userId/dashboard" element={<Dashboard />} />
                </Routes>
            </TokenContext>
        </BrowserRouter>
    );
};

export default App;
