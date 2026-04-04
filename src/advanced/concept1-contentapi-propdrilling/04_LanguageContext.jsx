// Create a LanguageContext that switches between "English" and "Hindi".
import React, {createContext, useContext, useState} from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState("English");

    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => useContext(LanguageContext);

export function DeepComponent() {
    const {language, setLanguage} = useLanguage();

    return (
        <div>
            <p><strong>Current Language: </strong>{language}</p>
            <button onClick={() => setLanguage("Hindi")}>Switch to Hindi</button>
            <button onClick={() => setLanguage("English")}>Switch to English</button>

            <button onClick={() => setLanguage(language === "Hindi" ? "English" : "Hindi")}>Toggle Language</button>
        </div>
    )
}