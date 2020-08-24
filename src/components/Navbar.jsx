import React, { Component } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import { AuthContext } from './../contexts/AuthContext';

class Navbar extends Component {
     static contextType = ThemeContext; 
    render() {
        //console.log(this.context);
        return (
         <AuthContext.Consumer>{(authContext)=>(
                <ThemeContext.Consumer>{(themecontext) => {
                    const {isAuthenticated, toggleAuth} = authContext;
                    const { isLightTheme, light, dark } = themecontext;
                    const theme = isLightTheme ? light : dark;
                    return (
                        <nav style={{ background: theme.ui, color: theme.syntax }}>
                            <h2>Context App</h2>
                            <div onClick={toggleAuth}>
                             {isAuthenticated ? 'Logged in' : 'Logout'}   
                            </div>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    )
                }}</ThemeContext.Consumer>
            )}
           
            </AuthContext.Consumer>
        )
       
        
    }
}

export default Navbar;