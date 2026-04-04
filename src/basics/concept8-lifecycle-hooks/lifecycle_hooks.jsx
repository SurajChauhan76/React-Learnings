import React from "react";
import { useState, useEffect } from "react";

// 1. Mounting Phase
// Class Component (Lifecycle)
export class LifecycleMountCompo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    componentDidMount() {
        console.log("Lifecycle/Clas Component mounted!");
        // API call or subscription
    }

    render() {
        return <div>
            {this.state.count}
        </div>
    }
}

// Functional Component (Hooks)
export function HookMountCompo() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Hook Component mounted!");
        // API call or subscription
    }, []); // empty dependency array = run once on mount

    return <div>{count}</div>
}


// 2. Updating Phase
// class component (Lifecycle)
export class LifecycleUpdateCompo extends React.Component {
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.value !== this.props.value) {
            console.log("Props changed!")
        }
    }
    render() {
        return <div>{this.props.value}</div>
    }
}

// Functional Component (Hooks)
export function HookUpdateCompo({ value}) {
    useEffect(() => {
        console.log("Props changed!");
    }, [value])   // runs whenever 'value' changes

    return <div>Value: {value}</div>
}


// 3. Unmounting Phase
//Class Component (Lifecycle)
export class LifecycleUnmountCompo extends React.Component {
    componentWillUnmount() {
        console.log("Lifecycle class Component will unmount!");
        // cleanup: remove event listeners, cancel timers
    }

    render() {
        return <div>Goodbye!</div>
    }
}

// Functional Component (Hooks)
export function HookUnmountCompo() {
    useEffect(() => {
        return () => {
            console.log("Hook Component will unmount!");
            // cleanup logic here
        }
    }, []) // cleanup runs on unmount

    return <div>Goodby Hooks!</div>
}


// 4. Full Lifecycle (Mount -> Update -> Unmount)
// Class Component
export class Timer extends React.Component {
    state = {seconds: 0};

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({seconds: this.state.seconds + 1});
        }, 1000)  // runs every 1 second
    }

    componentDidUpdate() {
        console.log("Timer updated:", this.state.seconds)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                <div>Seconds: {this.state.seconds}</div>
                <button onClick={this.componentWillUnmount}>Cleanup</button>
            </div>
        )

    }
}

// Functional component with Hooks
export function HookTimer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000)

        console.log("Timer updated:", seconds);

        return () => clearInterval(interval); // cleanup unmount
    }, [seconds]) // runs whenever seconds changes

    return <div>Seconds: {seconds}</div>
}


// 5. Data fetching with useEffect
export function DataFetcher() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            let res = await fetch("https://jsonplaceholder.typicode.com/users/1");
            let jsonData = await res.json();
            setData(jsonData);
        }
        fetchData();
    }, [])   // run once

    return <div>{data ? data.title : "Loading..."}</div>
}


// 6. Cleanup in useEffect
export function TaskCleaner() {
    useEffect(() => {
        const timer = setInterval(() => console.log("Tick"), 1000);

        return () => clearInterval(timer); // cleanup
    }, [])   // empty array dependency indiciates runs once
}

// Issue with useEffect fetch(), need to work on that

// export async function APIDataFetch() {
//     let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     let data = await res.json();

//     return <div>{data.title}</div>
// }