import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

/** Navbar for the dogfinder app
 * displays names of dogs as links to their bios
 * 
 * props:  dogs (array of dog objects)
 * 
 * state: None
 */
function Nav({dogs}){

    return (
        <nav className="DogFinder-NavBar">
            {dogs.map(dog=> 
            <NavLink key={dog.name} exact to={`/dogs/${dog.name}`} >
                {dog.name}
            </NavLink> ) }
        </nav>

    )
}

export default Nav;