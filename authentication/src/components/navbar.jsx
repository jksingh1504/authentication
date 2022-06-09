import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./navbar.css";

const Navbar = () => {
	const { reducer, isAuth, toggleAuth,Token,login } = useContext(AuthContext);
    const Email=React.useRef("")
    const Password=React.useRef("")


	return (
		<>
			<div className="navbar">
				<div>Token:{Token}</div>
				<div onClick={()=>{toggleAuth({type:"logout",payload:null})}}><p>{login.current}</p></div>
			</div>
            <br /><br />
            <input type="email" placeholder="enter your email" onChange={e=>{Email.current=e.target.value}}/>
            <input type="password" placeholder="enter your password" onChange={e=>{Password.current=e.target.value}}/>
            <br /><br />
            <button onClick={()=>{toggleAuth({type:"log",payload:{Email:Email.current,Password:Password.current}})}}>login</button>
		</>
	);
};

export default Navbar;
