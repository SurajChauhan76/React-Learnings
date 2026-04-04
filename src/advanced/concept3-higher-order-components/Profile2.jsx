import React from "react";

// 1. withLogger HOC: Logs props before rendering the wrapped component.
const withLogger = (WrappedComponent) => {
    return (props) => {
        console.log("Props:", props);
        return <WrappedComponent {...props} />
    }
}

// 2. withAuth HOC: Blocks access if not logged in.

const withAuth = (WrappedComponent) => {
    return (props) => {
        if (!props.isLoggedIn) {
            return <div>Please log in to continue.</div>
        }
        return <WrappedComponent {...props} />
    }
}

// 3. Wrapping Profile with both

const Profile = ({ name }) => <h2>Welcome, {name}</h2>;

export const EnhancedProfile = withAuth(withLogger(Profile));

//4. withTheme HOC: Inject a theme prop.

const withTheme = (WrappedComponent) => {
    return (props) => {
        const theme = "dark";  // could come from context
        return <WrappedComponent {...props} theme={theme} />
    }
}

export const ThemedProfile = withTheme(Profile);