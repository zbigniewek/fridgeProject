import React from 'react';

import { NavLink } from 'react-router-dom';

import "./navigation.scss"
import "./fridge.scss"

const Navigation = () => {
    return (
        <div className={"fridge"}>

             <ul className={"navigation"}>
                 <h2>F R I D G E</h2>
                 <div></div>

            <div className={"openButton"}>
                <NavLink style={{color: "black", textDecoration: "none"}} exact to="/Fridge" ><p>OTWÓRZ</p></NavLink>
            </div>
             </ul>
        </div>
    );
};

export default Navigation;