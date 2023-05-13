import { createContext, useState, useEffect } from "react";

const initUesr = {
    first_name: "",
    last_name: "",
    email: "",
    user_password: "",
    isLoggedIn: false
}

const getInitialState = () => {
    const user = sessionStorage.getItem("user");
    console.log(user);
    return user ? JSON.parse(user) : initUesr;
}

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    const [user, setUser] = useState(getInitialState);
    console.log(user);

    useEffect(() => {
        sessionStorage.setItem("user", JSON.stringify(user));
    }, [user]);


    const login = (first_name, last_name, email, user_password) => {

        // Not working
        // user = { first_name, last_name, email, user_password, isLoggedIn: true };
        // setUser(user);

        user.first_name = first_name;
        user.last_name = last_name;
        user.email = email;
        user.user_password = user_password;
        user.isLoggedIn = true;
        setUser(user);

        sessionStorage.setItem("user", JSON.stringify(user));
    }

    const logout = () => {
        setUser({})
        // sessionStorage.setItem("user", JSON.stringify(initUesr));
        sessionStorage.setItem("user", JSON.stringify(user));
    }

    const signUp = (first_name, last_name, email, user_password) => {
        // First Option
        user.first_name = first_name;
        user.last_name = last_name;
        user.email = email;
        user.user_password = user_password;
        setUser(user);

        // Not working
        // user = { first_name, last_name, email, user_password };
        // setUser(user);

        sessionStorage.setItem("user", JSON.stringify(user));
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, signUp }} >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;