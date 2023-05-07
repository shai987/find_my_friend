import MyRouter from "./routes/MyRouter";
import { useState } from 'react';
import UserRequestContextProvider from "./context/UserRequestContext";
import AuthContextProvider from "./context/AuthContext";

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <AuthContextProvider>
          <UserRequestContextProvider>
            <MyRouter />
          </UserRequestContextProvider>
        </AuthContextProvider>
      </header>
    </div>
  );
}

export default App;
