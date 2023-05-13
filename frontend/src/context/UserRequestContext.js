import { createContext, useState, useEffect } from "react";

const initRequest = {
    status: ""
}

const getInitialState = () => {
    const request = sessionStorage.getItem("request");
    return request ? JSON.parse(request) : initRequest;
}

export const UserRequestContext = createContext();

const UserRequestContextProvider = (props) => {
    const [request, setRequest] = useState(getInitialState);

    useEffect(() => {
        sessionStorage.setItem("request", JSON.stringify(request));
    }, [request]);

    const updateStatus = (status) => {
        request.status = status;
        setRequest(request);
        sessionStorage.setItem("request", JSON.stringify(request));
    }

    return (
        <UserRequestContext.Provider value={{ request, updateStatus }} >
            {props.children}
        </UserRequestContext.Provider>
    )
}

export default UserRequestContextProvider;