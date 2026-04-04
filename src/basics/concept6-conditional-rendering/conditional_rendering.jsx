import { useState } from "react"

// 1. Using if/else
export function ConditionalGreeting( {isLoggedIn}) {
    if(isLoggedIn) {
        return <h3>Welcome back!</h3>
    } else {
        return <h3>Please log in</h3>
    }
}


// 2. Ternary Operator
export function TernaryGreeting({isLoggedIn}) {
    return (
        <h3>
            {isLoggedIn ? "Welcome back!" : "Please log in"}
        </h3>
    )
}


// 3. Logical AND (&&)
export function Notification({hasMessage}) {
    return (
        <div>
            {hasMessage && <p>You have new message!</p>}
        </div>
    )
}


// 4. Conditional Rendering with State
export function ConditionalToggle() {
    const [isOn, setIsOn] = useState(true);

    return (
        <div>
            <button onClick={() => setIsOn(!isOn)}>
                {isOn ? "ON" : "OFF"}
            </button>
        </div>
    )
}


// 5. Rendering different components
function AdminPanel() {
    return <h2>Admin Access</h2>
}

function UserPanel() {
    return <h2>User Access</h2>
}

export function Dashboard({role}) {
    return role == "admin" ? <AdminPanel /> : <UserPanel />;
}


// Exercises
// 1. Create a Greeting component that shows "Hello Suraj" if isLoggedIn = true, otherwise "Guest".
export function CompGreet({isLoggedIn}) {
    return (
        <h3>
            {isLoggedIn ? "Hello, Suraj" : "Guest"}
        </h3>
    )
}


// 2. Use && to render "You have notifications" only if hasNotifications = true.
export function Notify({hasNotification}) {
    return (
        <div>
            {hasNotification && <p>You have notifications</p>}
        </div>
    )
}


// 3. Combine state + conditional rendering to show "Loading..." until data is fetched.
export function LoadData() {
    const [data, setData] = useState("");
    return (
        <div>
            <p>{data ? "Data fetched successfully" : "Loading..."}</p>
            <p><strong>{data}</strong></p>
            <button onClick={() => setData("I have some new data")}>Onload Data</button>
        </div>
    )
}