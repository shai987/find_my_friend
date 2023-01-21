import './../assets/css/Loader.css';
import running_dog from './../assets/images/dog_running_loader.gif';

const Loader=()=> {  
    return ( 
           <> 
            <div className="preloader">
              <h2>
                <img src={running_dog} alt="loading" />
                בטעינה...
              </h2>
            </div>
           </>    
       ); 
}
export default Loader;

