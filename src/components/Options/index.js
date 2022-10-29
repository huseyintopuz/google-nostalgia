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
    </div>
  )
}

export default Options