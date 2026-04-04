import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav style={{ margin:"20px", display:"flex", gap:"30px"}}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/login">Login</Link>
        </nav>
    )
}