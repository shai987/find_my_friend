import MyRouter from "./routes/MyRouter";
import { useState } from 'react';
import { UserProvider } from "./context/UserContext";

const App = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    status: ""
  })
  return (
    <div className="App">
      <header className="App-header">
        <UserProvider value={{ user, setUser }}>
          <MyRouter />
        </UserProvider>
      </header>
    </div>
  );
}

export default App;
