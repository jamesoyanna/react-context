import React, { useContext} from 'react';
import { ThemeContext } from './../contexts/ThemeContext';


const ToggleTheme = () => {
    const {toggleTheme} = useContext(ThemeContext)
    return (
        <div>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
      );
}
 
export default ToggleTheme;
