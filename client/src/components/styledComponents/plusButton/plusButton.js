import React from 'react';
import './plusButton.css';
import { Link } from 'react-router-dom';

const PlusButton = () => {    
    return <Link to="/surveys/new">
        <button className="plusButton">+</button>
    </Link>
}

export default PlusButton;