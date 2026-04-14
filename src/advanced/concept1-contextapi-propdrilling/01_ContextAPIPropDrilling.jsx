import { createContext, useContext } from "react";

// Problem: Prop Drilling

export function Parent({ username }) {
    return <Child username={username} />;
}

// function Child({username}) {
//     return <GrandChild username={username} />;
// }

function Child() {
    return (
        <div>
            <GrandChild1 />
            <GrandChild2 />
        </div>
    );
}

// function GrandChild({username}) {
//     return <p>Hello, {username}! called by prop drilling</p>
// }

// Solution: Context API
// Context API lets you share data globally without drilling props
//step 1: create context
export const UserContext = createContext();

// step 2: provide context in App.jsx, wrap app with a Provider

// step 3: consume context
function GrandChild1() {
    const username = useContext(UserContext);
    return <p>Hello, {username}! called by API context grand child 1</p>
}

function GrandChild2() {
    const username = useContext(UserContext);
    return <p>{username} called by grand child 2</p>
}