
export function GreetPassProp(props) {
    return <h1>Hello, {props.name}</h1>
}

export function GreetDestructure({name}) {
    return <h1>Hello, {name}</h1>
}

export function MultipleProp({name, age, role}) {
    return <p>{name} is {role} having age {age} years</p>
}

export function PropButton({label, onClick}) {
    return <button onClick={onClick}>{label}</button>
}

export function DefaultProp({name = "Guest"}) {
    return <h1>Welcome, {name}</h1>
}

export function ArrayProp({arr}) {
    return (
        <div>
            <ul>
                {arr.map(element => <li key={element}>{element}</li>)}
            </ul>
        </div>
    )
}