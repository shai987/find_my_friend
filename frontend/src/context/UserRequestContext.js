import { createContext, useContext, useEffect, useState } from "react";

export const UserRequestContext = createContext();

const UserRequestContextProvider = (props) => {
    const [request, setRequest] = useState({
        status: "",
      });

    const updateStatus = (status) => {
        setRequest({status: status});
        if(sessionStorage.getItem("request") === null){
            sessionStorage.setItem("request",JSON.stringify(request));
        }
        else{
            setRequest(JSON.parse(localStorage.getItem("request")));
        }
    }

    return (
            <UserRequestContext.Provider value={{request, updateStatus}} >
                {props.children}
            </UserRequestContext.Provider>
    )
}

export default UserRequestContextProvider;