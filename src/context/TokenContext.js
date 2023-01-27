import { createContext, useState } from "react";

export const tokenContext = createContext();

const TokenContext = ({ children }) => {
    const [token, setToken] = useState("");

    return (
        <tokenContext.Provider value={{ token, setToken }}>
            {children}
        </tokenContext.Provider>
    );
};

export default TokenContext;
