function withAuthLog(WrappedComponent) {
    return function AuthLogComponent(props) {
        const isLoggedIn = true; // prentend auth check

        if (!isLoggedIn) return <p>Please log in</p>
        console.log("Props:", { props })
        return <WrappedComponent {...props} />

    }
}

// Usage:
function Profile({ name, age, email }) {
    return (
        <div style={{ height:"200px", background:"#bbb", color:"#000" }}>
            <h3>My Profile</h3>
            <p><strong>Name: </strong>{name}</p>
            <p><strong>Age: </strong>{age}</p>
            <p><strong>Email: </strong>{email}</p>
        </div>
    )
}

export const ProtectedProfile = withAuthLog(Profile);