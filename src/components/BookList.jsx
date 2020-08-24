import React, { Component } from 'react';
import { ThemeContext } from './../contexts/ThemeContext';

class BookList extends Component {
static contextType = ThemeContext;

    render() {
        const {isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark
        
        return (
            <div className="book-list"  style={{color: theme.syntax, background: theme.bg}}>
                <h1>Book List</h1>
                <ul>
                    <li style={{background: theme.ui}}>The empire </li>
                    <li style={{background: theme.ui}}>Act of love</li>
                    <li style={{background: theme.ui}}>Day done at night</li>
                </ul>
            </div>
        );
    }
}

export default BookList;
