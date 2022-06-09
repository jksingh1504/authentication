import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const Login = ({ Email, Password }) => {

		fetch("https://reqres.in/api/login", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				email: Email,
				password: Password,
			}),
		})
			.then((res) => res.json())
			.then((data) => {login.current="logout";SetToken(data.token)});
	};

    const login =React.useRef("login")
    const [Token, SetToken] = React.useState(null);

    const LogOut=()=>{
        login.current="Login"
        SetToken(null)
    }


    const reducer = (isAuth, action) => {
		switch (action.type) {
			case "log":
				return Login(action.payload);
			default:
				return LogOut();
		}
	};


	const [isAuth, toggleAuth] = React.useReducer(reducer, null);
	
    

	return (
		<AuthContext.Provider value={{ reducer, isAuth, toggleAuth, Token,login }}>
			{children}
		</AuthContext.Provider>
	);
};
