import React from 'react';

import { NavLink } from 'react-router-dom';

import "./navigation.scss"
import "./fridge.scss"



const activeStyle={
    color: 'red',
};

const Navigation = () => {
    return (
        <div className={"fridge"}>

             <ul className={"navigation"}>
                 <h2>F R I D G E</h2>
                 <div></div>

            <li>
                <NavLink exact to="/open" activeStyle={activeStyle}>Open</NavLink>
            </li>


             </ul>
        </div>
    );
};

export default Navigation;