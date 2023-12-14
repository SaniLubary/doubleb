import { ReactElement, createContext, useState } from "react";

type SidenavContextType = {
    isSidenavOpen: boolean,
    toogleSidenav: () => void,
} 

export const SidenavContext = createContext<SidenavContextType | undefined>(undefined);

export const SidenavProvider = ({children}: {children: ReactElement}) => {
    const [isSidenavOpen, setIsSidenavOpen] = useState(false);

    const toogleSidenav = () => {
        setIsSidenavOpen(prevSidenavOpen => !prevSidenavOpen);
    }

    const sidenavContextValue: SidenavContextType = {
        isSidenavOpen,
        toogleSidenav
    }

    return <SidenavContext.Provider value={sidenavContextValue}>
        {children}
    </SidenavContext.Provider>
}