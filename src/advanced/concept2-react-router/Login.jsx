import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    function handleLogin() {
        // After login, go to dashboard
        navigate("/dashboard");
    }

    return <button onClick={handleLogin}>Login</button>
}