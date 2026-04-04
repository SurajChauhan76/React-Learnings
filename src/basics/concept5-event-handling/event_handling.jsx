import React, {useState} from "react"

// 1. Handling Click Events
export function ClickButton() {
    function handleClick() {
        alert("Button clicked!")
    }

    return <button onClick={handleClick}>Click Me</button>
}

// 2. Inline event handlers
export function InlineEvent() {
    return (
        <div>
            <button onClick={() => alert("Inline Click!")}>Click</button>
        </div>
    )
}


// 3. Passing arguments to event handlers
export function GreetButton({ name }) {
    function greet(user) {
        alert(`Hello, ${user}`)
    }
    function greet2() {
        alert(`Hello, Riya`)
    }

    return (
        <div>
            <button onClick={() => greet(name)}>Greet</button> {/* for passing arguments */}
            <button onClick={greet2}>Greet2</button>           {/* No argument passing */}
        </div>
    )
}


// 4. Handling input events
export function InputBox() {
    const [text, setText] = useState("");

    return (
        <div>
            <input type="text" value={text}
            onChange={(e) => {
                setText(e.target.value), 
                console.log(e)
                }} />
            <p><strong>You typed:</strong> {text}</p>
        </div>
    )
}


// 5. Form submission
export function SubmitForm() {
    function handleSumbit(e) {
        e.preventDefault(); // prevent page reload
        alert("Form submitted!");
    }

    return (
        <form onSubmit={handleSumbit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" />
            <br />
            <label htmlFor="age">Age:</label>
            <input type="text" id="age" /> 
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}