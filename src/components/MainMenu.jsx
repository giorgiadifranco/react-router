import { NavLink } from "react-router-dom";


export default function MainMenu(){

    return(

    <nav>

        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/about">Chi Siamo</NavLink>
        
    </nav>
    )
}