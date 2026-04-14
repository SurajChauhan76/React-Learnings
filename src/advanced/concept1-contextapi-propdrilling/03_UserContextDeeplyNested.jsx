// Build a UserContext that provides a user’s name and display it in a deeply nested component.

import React, { createContext, useContext} from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const user = {name: "Suraj", role: "Backend Developer"};

    return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext);

export function DeeplyNested() {
    const {name, role} = useUser();
    return <h3>User: {name} ({role})</h3>
}