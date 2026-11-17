import { createContext, useState, useContext } from "react";

export const MenuContext = createContext({
    menuState: ['Home', 'Services', 'Projects', 'About', 'Contact'],
    appendItem: () => {}
});

export function MenuProvider({ children }) {
    // Furtther More I wil make it from backend database 
    const [menuState, setMenuState] = useState(
        ['Home', 'Services', 'Projects', 'About', 'Contact']
    );

    const appendItem = (newItem) => {
        setMenuState(prev => [...prev, newItem]);
    };

    return (
        <MenuContext.Provider value={{
            menuState, appendItem
        }}>
            {children}
        </MenuContext.Provider>
    );
}

export default MenuProvider;