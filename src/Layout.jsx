// Component Composition

function Header() {
    return <h2>Header</h2>
}

function Footer() {
    return <p>Footer</p>
}

function Layout() {
    return (
        <div>
            <Header />
            <p>Main Content</p>
            <Footer />
        </div>
    )
}
export default Layout;