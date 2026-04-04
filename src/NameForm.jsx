// Forms and Controlled Components
import { useState } from "react";

function NameForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    return (
        <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            <p>Your name: {name}</p>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <p>Your email: {email}</p>
        </form>
    )
}
export default NameForm;