import React from 'react';
import './search.css';

const Search = () => {
    return (
        <div className='search'>
            <p>Search the web using Google!</p>
            <input type="text" />
            <div>
                <button>Google Search</button>
                <button>I'm feeling lucky</button>
            </div>
        </div>
    )
}

export default Search