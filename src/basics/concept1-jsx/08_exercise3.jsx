// Write JSX that conditionally renders "Logged In" if isLoggedIn = true, otherwise "Guest".

export default function MyLoginStatus() {
    const isLoggedIn = false;
    const user = "Abhijit";
    return (
        <div>
            {isLoggedIn ? <p>{user}</p> : <p>Guest</p>}
        </div>
    );
}