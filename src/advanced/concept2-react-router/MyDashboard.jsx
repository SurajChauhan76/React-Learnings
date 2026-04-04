import { Link, Outlet } from "react-router-dom";

export default function MyDashboard() {
  return (
    <div>
      <h2>Dashboard Layout</h2>
      <nav>
        <Link to="settings">Settings</Link>
      </nav>
      {/* Nested routes render here */}
      <Outlet />
    </div>
  );
}

export function DashboardHome() {
  return <p>Welcome to your Dashboard!</p>;
}