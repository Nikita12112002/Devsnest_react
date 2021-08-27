import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import {ThemeContextType} from "./ThemeContext";
const ToggleTheme =()=>
{
    const{theme , setTheme}= useContext<ThemeContextType>(ThemeContext);
    return(
        <>
        <button className={theme ? "day33_themetoggle dark" : "day33_themetoggle"} onClick={()=>
        {
            setTheme(!theme)
        }}>
            {theme?"Dark":"Light"}
        </button>
        </>
    );
}
export default ToggleTheme;