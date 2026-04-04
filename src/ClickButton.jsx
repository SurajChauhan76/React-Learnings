// Event Handling
function ClickButton() {
    function handleClick() {
        alert("Button clicked!");
    }
    return <button onClick={handleClick}>Click Me</button>
}
export default ClickButton;