import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false};
    }

    static getDerivedStateFromError(error) {
        // Update state so fallback UI can be shown
        return { hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        // log error details
        console.error("Error caught:", error, errorInfo);
    }

    render() {
        if(this.state.hasError) {
            return <h2>Something went wrong.</h2>
        }
        return this.props.children;
    }
}
export default ErrorBoundary;


// Custom fallback UI with "Retry" button.
export class ErrorBoundary2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Logged error:", error, info);
    }

    handleRetry = () => {
        this.setState({ hasError: false});
    }

    render() {
        if(this.state.hasError) {
            return (
                <div>
                    <h2>Oops! Something went wrong.</h2>
                    <button onClick={this.handleRetry}>Retry</button>
                </div>
            )
        }
        return this.props.children;
    }
}