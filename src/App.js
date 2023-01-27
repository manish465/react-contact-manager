import "./styles.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import TokenContext from "./context/TokenContext";
import NavBar from "./components/NavBar";
import { pageMap } from "./pages";

const App = () => {
    return (
        <BrowserRouter>
            <TokenContext>
                <NavBar />
                <Routes>
                    {pageMap.map((page, key) => (
                        <Route
                            key={key}
                            path={page.path}
                            element={page.element}
                        />
                    ))}
                </Routes>
            </TokenContext>
        </BrowserRouter>
    );
};

export default App;
