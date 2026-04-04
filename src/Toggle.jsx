// Conditioal Rendering
import { useState } from "react";

function CheckLoginStatus() {
    const isLoggedIn = true;
    return (
        <div>
            {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>}
        </div>
    )
}
export { CheckLoginStatus };

function Toggle() {
    const [isOn, setIsOn] = useState(true);
    return (
        <button onClick={() => setIsOn(!isOn)}>
            {isOn ? "ON" : "OFF"}
        </button>
    )
}
export default Toggle;