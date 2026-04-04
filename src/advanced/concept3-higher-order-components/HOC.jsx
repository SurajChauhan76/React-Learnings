function withLogger(WrappedComponent) {
    return function EnhancedComponent(props) {
        console.log("Props:", props);
        return <WrappedComponent {...props} />
    }
}

// Usage
function Greeting({name}) {
    return <h2>Hello, {name} - Welcome to Higher Order Components</h2>
}

export const GreetingWithLogger = withLogger(Greeting)