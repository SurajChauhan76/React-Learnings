import { useState } from "react";

// 1. Rendering Lists
export function FruitList() {
    const fruits = ["Apple", "Banana", "Cherry"];

    return (
        <ul>
            {fruits.map((fruit, index) => <li key={index}>{fruit}</li>)}
        </ul>
    )
}


// 2. Rendering Objects
export function Users() {
    const users = [
        { id: 1, name: "Suraj" },
        { id: 2, name: "Vinit" }
    ]

    return (
        <div>
            <p>Users list:</p>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    )
}


// 3. Dynamic Rendering with state
export function DailyTodoList() {
    const [todos, setTodos] = useState(["Running", "Training Class", "Lunch"]);

    const addTodo = () => setTodos([...todos, "Learn JS", "Learn React"])

    return (
        <div>
            <p><strong>Daily to do list:</strong></p>
            <ol>
                {todos.map((todo, idx) => <li key={idx}>{todo}</li>)}
            </ol>
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
}


// 4. Nested Lists
export function NestedListCategories() {
    const categories = [
        {id: 1, name: "Fruits", items: ["Apple", "Mango"]},
        {id: 2, name: "Veggies", items: ["Carrot", "Spinach"]}
    ]

    return (
        <div>
            {categories.map(cat => (
                <div key={cat.id}>
                    <h3>{cat.name}</h3>
                    <ul>
                        {cat.items.map(item => <li key={item}>{item}</li>)}
                    </ul>
                </div>
            ))}
        </div>
    )
}


// Exercises
// 1. Render a list of names ["Suraj","Dev","Sam"] using .map().
export function NameList() {
    const names = ["Suraj","Dev","Sam"];

    return (
        <div>
            <p><strong>Name list:</strong></p>
            <ul>
                {names.map((name, idx) => <li key={idx}>{name}</li>)}
            </ul>
        </div>
    )
}


// 2. Render a list of objects with {id, name} and use id as the key.
export function EmployeeList() {
    const employees = [
        {id: 1001, name: "Prakash"},
        {id: 1002, name: "Dhinay"}
    ]

    return (
        <div>
            <p>Employees list:</p>
            <ul>
                {employees.map(emp => <li key={emp.id}>{emp.name}</li>)}
            </ul>
        </div>
    )
}


// 3. Render nested lists (categories with items).
export function Groceries() {
    const categories = [
        {id:101, name: "Noodles", items: ["Maggie", "Chowmein"]},
        {id:102, name: "Ketch up", items: ["Tomato", "Chilly"]},
        {id:103, name: "Pulses", items: ["Rahar", "Moong", "Chana"]}
    ]

    return (
        <div>
            <p><strong>Groceries items:</strong></p>
            {categories.map(cat => (
                <div key={cat.id}>
                    <h3>{cat.name}</h3>
                    <ul>
                        {cat.items.map((item, idx) => <li key={idx}>{item}</li>)}
                    </ul>
                </div>

            ))}
        </div>
    )
}