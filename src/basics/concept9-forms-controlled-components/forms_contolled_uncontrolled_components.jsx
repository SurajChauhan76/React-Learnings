import { useState, useRef } from "react";

// 1. Controlled Input

export function NameForm() {
    const [name, setName] = useState("");
    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <p>Your name: {name}</p>
        </div>
    )
}


// 2. Controlled Checkbox
export function CheckboxForm() {
    const [chekced, setChecked] = useState(false);
    return (
        <label>
            <input type="checkbox" checked={chekced} onChange={(e) => setChecked(e.target.checked)} />
            {chekced ? "Checked" : "Unchecked"}
        </label>
    )
}

// 3. Controlled Select Dropdown

export function SelectForm() {
  const [fruit, setFruit] = useState("Apple");

  return (
    <div>
      <label>Choose a fruit: </label>
      <select value={fruit} onChange={(e) => setFruit(e.target.value)}>
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Cherry">Cherry</option>
      </select>
      
      <p>Current selection: <strong>{fruit}</strong></p>
    </div>
  );
}


// 4. Form Submission
export function LoginForm() {
    const [username, setUsername] = useState("");

    function handleSubmit(e) {
        e.preventDefault(); // prevent page reload
        alert(`Logging in as ${username}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br />
            <p>Your entered username: {username}</p>
            <button type="submit">Login</button>
        </form>
    )
}


// 5. Uncontrolled Component (for comparison)
export function UncontrolledForm() {
    const inputRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        alert(`Value: ${inputRef.current.value}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Reference:</label>
            <input type="text" ref={inputRef} />
            <button type="submit">Submit</button>
        </form>
    )
}

// 5.1. Accessing the DOM (Common use of useRef)
// We use useRef to programmatically focus an input field when a button is clicked.
export function FocusInput() {
    const inputRef = useRef(null);

    const handleClick = () => {
        // We access the actual DOM node via .current
        inputRef.current.focus();  // focus() creates a outer border and highlights it
        inputRef.current.style.backgroundColor = "#6519c1";
    }

    return (
        <div>
            <input type="text" ref={inputRef} placeholder="Click button to focus me" />
            <button onClick={handleClick}>Focus the Input</button>
        </div>
    )
}


// 5.2. Storing a value without Re-rendering
// We track how many times a button was clicked without showing that count on the screen. 
// Notice the UI doesn't update even though the value is changing.

export function ClickCounter() {
    const countRef = useRef(0);  // useRef returns an object which equivalent to { current:0} and to access the useRef value we need to use ".current" property. This will not render the ui, it does not tell the react to render the ui unlike useState
    const [renderCount, setRenderCount] = useState(0);  // useState returns number, string, boolean so rendering on UI is possible

    const handleRefClick = () => {
        countRef.current = countRef.current + 1;
        console.log(`Clicked ${countRef.current} times (No re-render)`)
    }

    const triggerRender = () => {
        setRenderCount(prev => prev + 1);
    }

    return (
        <div>
            <p>Compnent has rendered {renderCount} times for useState.</p>
            <button onClick={triggerRender}>Force Re-render to see Ref</button>
            <p>Component has rendered {countRef.current} times for useRef</p>
            <button onClick={handleRefClick}>Increment Ref (Secretely)</button>
            <p>Check the console to see the Ref value increasing without a re-render!</p>
        </div>
    )
}


// Exercises
// 1. Create a controlled input that shows live text as you type.
export function ControlledInput() {
    const [userInput, setUserInput] = useState("");

    return (
        <div>
            <label htmlFor="">Enter Input: </label>
            <input type="text" onChange={(e) => setUserInput(e.target.value)} />
            <p>Entered input: {userInput}</p>
        </div>
    )
}

// 2. Build a controlled checkbox that toggles between "Checked" and "Unchecked".
export function ControlledCheckBox() {
    const [checkedVal, setChecked] = useState(false);

    return (
        <label htmlFor="">
                <input type="checkbox" checked={checkedVal} onChange={(e) => setChecked(e.target.checked)} />
                {checkedVal ? "Checked" : "Unchecked"}
            </label>
    )
}
// "checked": is an attribute to capture the check for true and uncheck for false.


// 3. Create a controlled dropdown with three options and display the selected value.
export function ControlledDropdown() {
    const [item, setItem] = useState();

    return (
        <div>
            <label htmlFor="">Choose Item: </label>
            <select name="" id="" value={item} onChange={(e) => setItem(e.target.value)}>
                <option value="">Select</option>
                <option value="Pen">Pen</option>
                <option value="Pencil">Pencil</option>
                <option value="Eraser">Eraser</option>
            </select>
            <p><strong>Your selected item: </strong>{item}</p>
        </div>
    )
}


// 4. Make a login form with controlled inputs for username and password.
export function ControlledLoginForm() {
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        alert(`Logging as ${username}`);
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Username: </label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <br />
                <label htmlFor="">Password: </label>
                <input type="text" value={pass} onChange={(e) => setPass(e.target.value)} />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
