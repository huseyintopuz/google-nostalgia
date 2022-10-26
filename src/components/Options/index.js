import React from 'react';
import SearchTypes from '../SearchTypes';
import Info from '../Info';
import GetGoogle from '../GetGoogle';
import "./options.css";

const Options = () => {
  return (
    <div className="options">
        <SearchTypes />
        <Info />
        <GetGoogle />
        <footer>Copyright ©1998 Inc.</footer>
    </div>
  )
}

export default Options