// 1. Basic Composition
function Header() {
    return <h2>My Game Header</h2>
}

function Footer() {
    return <p>© 2026 Suraj</p>
}

export function MyGameApp() {
    return (
        <div>
            <Header />
            <h1>Main Content</h1>
            <Footer />
        </div>
    )
}


// 2. Props for Composition
export function Card({ title, children}) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <div>{children}</div>
        </div>
    )
}


// 3. Nested Components
function Sidebar() {
    return <nav>Sidebar Links</nav>
}

function Content() {
    return <main>Main Content</main>
}

export function Layout() {
    return (
        <div>
            <Sidebar />
            <Content />
        </div>
    )
}


// 4. Reusable Components
function Button({ label, onClick}) {
    return <button onClick={onClick}>{label}</button>
}

export function MyReusableButtons() {
    return (
        <div>
            <h3>My Reusable Buttons</h3>
            <Button label="Save" onClick={() => alert("Saved")} />
            <Button label="Delete" onClick={() => alert("Deleted")} />
        </div>
    )
}

// Exercises
// 1. Compose a Dashboard with Sidebar, MainContent, and Footer.



// 2. Use composition to build a ProfileCard that shows user info inside a Card.
