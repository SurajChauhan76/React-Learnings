import ReactDOM from "react-dom";
import React, { useState, useRef } from "react";

// Modal
function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className="modal">{children}</div>,
        document.getElementById("portal-root")
    )
}

// Usage
export default function UseModal() {
    const [show, setShow] =  useState(false);

    return (
        <div>
            <button onClick={() => setShow(true)}>Open Modal</button>
            {show && (
                <Modal>
                    <h2>This is a Portal Modal</h2>
                    <button onClick={() => setShow(false)}>Close</button>
                </Modal>
            )}
        </div>
    )
}


// Exercises

// 1. Create a Modal using portals that opens/closes with a button.
const Modal2 = ({isOpen, onClose, children }) => {
    if(!isOpen) return null;

    return ReactDOM.createPortal(
        <div style={styles.overlay}>
            <div style={styles.modal }>
                {children}
                <button onClick={onClose}>Close</button>
            </div>
        </div>,
        document.getElementById("portal-root2")   // separate div in index.html
    )
}

const styles = {
    overlay: {position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.5"},
    modal: {background: "white", padding: "20px", borderRadius: "8px"}
}

export function UseModal2() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setOpen(true)}>Open Modal 2</button>
            <Modal2 isOpen={open} onClose={() => setOpen(false)}>
                <h2>Portal Modal 2</h2>
            </Modal2>
        </div>
        
    )
}


// 2. Build a Tooltip component that renders outside its parent.
const Tooltip = ({ text, targetRef }) => {
    if(!targetRef.current) return null;

    const rect = targetRef.current.getBoundingClientRect();

    return ReactDOM.createPortal(
        <div style={{ position: "absolute", top: rect.bottom + 5, left: rect.left, background: "black", color: "white", padding: "5px"}}>
            {text}
        </div>,
        document.body
    )
}

export const ButtonWithTooltip = () => {
    const ref = useRef();
    const [show, setShow] = useState(false);

    return (
        <>
            <button ref={ref} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                Hover me
            </button>
            {show && <Tooltip text="I am a tooltip!" targetRef={ref} />}
        </>
    )
}


// 3. Create a Notification system that shows messages at the top of the page.
export const NotificationPortal = ({ message }) => {
    return ReactDOM.createPortal(
        <div style={{ position: "fixed", top: 0, left: "50%", transform: "translateX(-50%)", background: "orange", padding: "10px"}}>
            {message}
        </div>,
        document.getElementById("notification-root")
    )
}


// 4. Combine portals with Context API to manage global modals.
const ModalContext = React.createContext();

export const ModalProvider = ({ children }) => {
    const [modalContent, setModalContent] = useState(null);

    const showModal = (content) => setModalContent(content);
    const hideModal = () => setModalContent(null);

    return (
        <ModalContext.Provider value={{ showModal, hideModal}}>
            {children}
            {modalContent && ReactDOM.createPortal(
                <div style={styles2.overlay}>
                    <div style={styles2.modal}>
                        {modalContent}
                        <button onClick={hideModal}>Close</button>
                    </div>
                </div>,
                document.getElementById("portal-root2")
            )}
        </ModalContext.Provider>
    )
}

// Usage
export const ProfilePortal = () => {
    const { showModal } = React.useContext(ModalContext);
    return (
        <button onClick={() => showModal(<div>This is the Profile Modal Portal</div>)}>
            Open Profile Modal
        </button>
    )
}

// styles as previously defined:
const styles2 = {
    overlay: {position: "fixed", left: 0, right: 0, bottom: 30, background: "rgba(0,0,0,0.5"},
    modal: {background: "white", color: "black", padding: "20px", borderRadius: "8px"}
}