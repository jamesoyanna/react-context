import React, { createContext, useState} from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: "Medecine for money", id: 1},
        {title: "Sugar girl", id: 2},
        {title: "Without a silver spoon", id: 3},
        {title: "Blue ocean strategy", id: 4}

    ])
    return (
        <BookContext.Provider value = {{books}}>
            {props.children}
        </BookContext.Provider>


      );
}
 
export default BookContextProvider;