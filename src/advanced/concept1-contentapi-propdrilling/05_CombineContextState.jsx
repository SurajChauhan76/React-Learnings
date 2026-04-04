// Combine Context with state (useState + useContext).
// Imagine a dashboard where theme, user, and language contexts all interact:

import { ThemeProvider, useTheme } from "./02_ThemeContext";
import { UserProvider, useUser } from "./03_UserContextDeeplyNested";
import { LanguageProvider, useLanguage } from "./04_LanguageContext";

export function CombineDashboard() {
    const {theme, toggleTheme} = useTheme();
    const {name} = useUser();
    const {language} = useLanguage();

    return (
        <div style={{ padding: 20, background: theme === "light" ? "#f9f9f9" : "#222", color: theme === "light" ? "#000" : "#fff"}}>
            <p><strong>Welcome, {name}</strong></p>
            <p>Preferred Language: {language}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}