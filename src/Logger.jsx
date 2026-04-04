// Lifecycle & Hooks
import { useEffect } from "react";

function Logger() {
    useEffect(() => {
        console.log("Component mounted"); // Runs once on mount
        return () => console.log("Component unmounted"); // Runs once on unmount
    }, [])  // [] - THIS EMPTY ARRAY
    return <h2>Check the console!</h2>
}
export default Logger;

// The empty dependency array [] tells the useEffect hook to run its logic exactly once: immediately after the component is first rendered (mounted). 
// Because there are no values inside the array for React to "watch," the effect has no reason to ever run again during subsequent re-renders.
// The [] makes the effect "run once on mount and clean up on unmount," preventing the log from appearing on every state change.
