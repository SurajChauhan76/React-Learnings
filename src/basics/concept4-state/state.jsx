import { useState } from "react";
import React from "react";

// 1. useState Hook (Functional Component)
export function Increment() {
    const [val, setVal] = useState(0); // initial state = 0

    return (
        <div>
            <button onClick={() => setVal(val + 1)}>Increment</button>
            <p>Value: {val}</p>
        </div>
    )
}

// 2. Initial state from props
export function MyGreeting({ initialName }) {
    const [name, setName] = useState(initialName);

    return <h1>Hello, {name}</h1>
}


// 3. State with Objects/Arrays
export function ToDoList() {
    const [todos, setTodos] = useState(["Learn JS", "Learn React", "Learn Java"]);

    const addTodo = () => setTodos([...todos, "Learn Spring Boot"]);

    return (
        <div>
            <ol>
                {todos.map((todo, i) => <li key={i}>{todo}</li>)}
            </ol>
            <button onClick={addTodo} >Update ToDo</button>
        </div>
    )
}

// 4. Functional Updates
export function Decrement({initialVal}) {
    const [val, setVal] = useState(initialVal);

    return (
        <div>
            <button onClick={() => setVal(prev => prev - 1)}>Decrement</button>
            <p>Value: {val}</p>
        </div>
    )
}

// 5. Class Component State (Legacy)
export class ClassCounter extends React.Component {
    state = { count: 0};

    classIncrement = () => {
        this.setState({ count: this.state.count + 1})
    }

    render() {
        return (
            <div>
                <button onClick={this.classIncrement}>Increment</button>
                <p>Count: {this.state.count}</p>
            </div>
        )
    }
}


// Exercises
// 1. Build a Toggle component that switches between "ON" and "OFF".
export function ToggleOnOff() {
    const [isOn, setIsOn] = useState(false);
    return (
        <button onClick={() => setIsOn(!isOn)}>
            {isOn ? "ON" : "OFF"}
        </button>
    )
}


// 2. Write a component that stores an object in state ({name, age}) and updates one property.
export const UserProfile = () => {
    const [user, setUser] = useState({name: "Peter", age: 25})

    const updateName = () => {
        setUser(prevUser => ({
            ...prevUser,        // Copy all existing properties
            name: "Taylor"      // Overwrite only the 'name' property
        }))
    }

    const updateAge = () => {
        setUser(prevUser => ({
            ...prevUser, 
            age: prevUser.age + 1
        }))
    }

    return (
        <div>
            <h2>User Profile</h2>
            <p><strong>Name:</strong>{user.name}</p>
            <p><strong>Age:</strong>{user.age}</p>

            <button onClick={updateName}>Change Name to Taylor</button>
            <br />
            <button onClick={updateAge}>Birthday</button>
        </div>
    )
}


// 3. Use functional updates to increment a counter by 2 each time.

export const IncrementCounter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p><strong>Count: </strong>{count}</p>
            <button onClick={() => {setCount(prevCount => prevCount + 2)}}>Increment Count by 2</button>
            <br />
            <button onClick={() => {setCount(prevCount => prevCount - 1)}}>Decrement Count by 1</button>
        </div>
    )
}