import { createContext, useState, useEffect } from "react";

const initUesr = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    isLoggedIn: false,
    isRender: false,
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


    const login = (first_name, last_name, email, phone_number) => {
        user.first_name = first_name;
        user.last_name = last_name;
        user.email = email;
        user.phone_number = phone_number;
        user.isLoggedIn = true;
        user.isRender = true;
        setUser(user);
        sessionStorage.setItem("user", JSON.stringify(user));
    }

    const logout = () => {
        setUser({})
        sessionStorage.setItem("user", JSON.stringify(user));
    }

    const signUp = (first_name, last_name, email, phone_number) => {
        user.first_name = first_name;
        user.last_name = last_name;
        user.email = email;
        user.phone_number = phone_number;
        setUser(user);
        sessionStorage.setItem("user", JSON.stringify(user));
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, signUp }} >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;