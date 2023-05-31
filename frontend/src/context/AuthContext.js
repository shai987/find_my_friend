import { createContext, useState, useEffect } from "react";
import Cookies from 'js-cookie';

const initUesr = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    isLoggedIn: false,
}

const getInitialState = () => {
    const user = Cookies.get("user");
    console.log(user);
    return user ? JSON.parse(user) : initUesr;
}

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    const [user, setUser] = useState(getInitialState);
    console.log(user);

    useEffect(() => {
        Cookies.set("user", JSON.stringify(user));
    }, [user]);


    const login = (first_name, last_name, email, phone_number) => {
        const updatedUser = {
            ...user,
            first_name,
            last_name,
            email,
            phone_number,
            isLoggedIn: true,
        };
        setUser(updatedUser);
        Cookies.set("user", JSON.stringify(user));
    }

    const logout = () => {
        setUser({})
        Cookies.set("user", JSON.stringify(user));

    }

    const signUp = (first_name, last_name, email, phone_number) => {
        const newUser = {
            ...user,
            first_name,
            last_name,
            email,
            phone_number,
            isLoggedIn: true,
        };
        setUser(newUser);
        Cookies.set("user", JSON.stringify(user));
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, signUp }} >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;