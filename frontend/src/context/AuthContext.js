import { createContext, useContext, useEffect, useState } from "react";

const initUesr = {
    first_name: "",
    last_name: "",
    email: "",
    user_password: "",
    isLoggedIn: false
  }

const getInitialState = () => {
    const user = sessionStorage.getItem("user");
    return user ? JSON.parse(user) : initUesr
}

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    const [user, setUser] = useState(getInitialState);

    const login = (first_name, last_name, email, user_password) => {
        user = { first_name, last_name, email, user_password, isLoggedIn: true };
        setUser(user);
        sessionStorage.setItem("user",JSON.stringify(user));
        /*if(localStorage.getItem("user") === null){
            localStorage.setItem("user",JSON.stringify(user));
        }
        else{
            setUser(JSON.parse(localStorage.getItem("user")));
        }*/
    }

    const logout = () => {
        setUser({})
        sessionStorage.setItem("user",JSON.stringify(user));
    }

    const signUp = (first_name, last_name, email, user_password) => {
        user = { first_name, last_name, email, user_password };
        setUser(user)
        sessionStorage.setItem("user",JSON.stringify(user));
    }

    return (
            <AuthContext.Provider value={{user, login, logout, signUp}} >
                {props.children}
            </AuthContext.Provider>
    )
}

export default AuthContextProvider;