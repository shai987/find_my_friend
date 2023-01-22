import {useState, useEffect} from "react";
import Loader from "./components/Loader";
import MyRouter from "./routes/MyRouter";

const App = () => {
const [isLoading, setIsLoading] = useState(false);
     
useEffect( ()=>
{
  setIsLoading(true)
  setTimeout(()=>
    {
      setIsLoading(false)
    }, 2000)
  } ,[]); 
 
  return (
    <div className="App">
      <header className="App-header">
      {isLoading ? <Loader /> : <MyRouter />}
      </header>
    </div>
  );
}

export default App;
