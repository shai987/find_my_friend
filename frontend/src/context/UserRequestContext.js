import { createContext, useState } from "react";

const initRequest = {
    status: ""
}

const getInitialState = () => {
    const user = sessionStorage.getItem("request");
    return user ? JSON.parse(user) : initRequest;
}

export const UserRequestContext = createContext();

const UserRequestContextProvider = (props) => {
    const [request, setRequest] = useState(getInitialState);

    const updateStatus = (status) => {
        // setRequest(status);
        setRequest({ status: status }); // maybe it is the problem
        if (sessionStorage.getItem("request") === null) {
            sessionStorage.setItem("request", JSON.stringify(request));
        }
        else {
            setRequest(JSON.parse(sessionStorage.getItem("request")));
        }
    }

    return (
        <UserRequestContext.Provider value={{ request, updateStatus }} >
            {props.children}
        </UserRequestContext.Provider>
    )
}

export default UserRequestContextProvider;