// Add a button with an onClick handler that alerts "Button clicked".
export default function MyButton() {
    return (
        <h1>
            <button onClick={() => alert("My button clicked")}>My Button</button>
        </h1>
    )
}