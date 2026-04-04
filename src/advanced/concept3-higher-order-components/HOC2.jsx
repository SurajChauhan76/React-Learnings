function withAuth(WrappedComponent) {
    return function AuthComponent(props) {
        const isLoggedIn = true; // prentend auth check

        if(!isLoggedIn) return <p>Please log in</p>

        return <WrappedComponent {...props} />
    }
}

// Usage:
function Dashboard() {
    return <h2>Welcome to Dashboard - Higher Order Components</h2>
}

export const ProtectedDashboard = withAuth(Dashboard);