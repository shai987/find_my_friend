import MyRouter from "./routes/MyRouter";
import { UserProvider } from "./context/UserContext";

const App = () => {
  const user = {
    name:"",
    surName:"",
    email:""
  }
  return (
    <div className="App">
      <header className="App-header">
        <UserProvider value={user}>
        <MyRouter />
        </UserProvider>
      </header>
    </div>
  );
}

export default App;
