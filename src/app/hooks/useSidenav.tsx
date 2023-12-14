import { useContext } from "react"
import { SidenavContext } from "../context/sidenav"

export const useSidenav = () => {
    const context = useContext(SidenavContext)
    if (!context) {
        throw new Error("Use useSidenav() hook within a SidenavProvider")
    }
    return context
}