import { createContext, useContext, useEffect, useState } from "react";

 export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        user_password: "",
      });

    const login = (first_name, last_name, email, password) => {
        console.log(first_name, last_name, email, password)
        setUser({first_name: first_name, last_name: last_name, email:email, user_password:password});
        if(localStorage.getItem("user") === null){
            localStorage.setItem("user",JSON.stringify(user));
        }
        else{
            setUser(JSON.parse(localStorage.getItem("user")));
        }
    }

    const logout = () => {
        setUser({})
    }

    return (
            <AuthContext.Provider value={{user, login, logout}} >
                {props.children}
            </AuthContext.Provider>
    )
}

export default AuthContextProvider;