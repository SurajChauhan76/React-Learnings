// Instead of using HOC use equivalent Custom Hooks
// Instead of HOCs, hooks let you encapsulate logic and reuse it more cleanly.
import React, {useEffect} from "react"
// Logger Hook

const useLogger = (props) => {
    React.useEffect(() => {
        console.log("Props:", props)
    }, [props])
}

// usage
export const Profile1 = ({name, isLoggedIn}) => {
    useLogger({name, isLoggedIn});
    return <h2>Welcome, {name}</h2>
}

// Auth Hook
const useAuth = (isLoggedIn) => {
    if(!isLoggedIn) {
        return false;
    }
    return true;
}

export const Profile2 = ({name, isLoggedIn}) => {
    const authorized = useAuth(isLoggedIn);
    if(!authorized) return <div>Please log in to continue.</div>;
    
    return <h2>Welcome, {name}</h2>;
}


// Theme Hook
const useTheme = () => {
    return "light";
}

export const Profile3 = ({name}) => {
    const theme = useTheme();

    return <h2 style={{background: theme === "dark" ? "#222" : "#fff", color: theme === "dark" ? "white" : "black"}}>Welcome, {name}</h2>
}