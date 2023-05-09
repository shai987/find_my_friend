import { useState, useEffect } from 'react';
import running_dog1 from './../assets/images/dog_running_loader1.gif';
import running_dog2 from './../assets/images/dog_running_loader2.gif';
import running_cat1 from './../assets/images/cat_running_loader1.gif';
import running_cat2 from './../assets/images/cat_running_loader2.gif';
import './../assets/css/Loader.css';

const Loader = () => {
  const loadingArray = [running_dog1, running_dog2, running_cat1, running_cat2];

  const [gifLoader, setGifLoader] = useState();

  const getLoaderGif = () => {
    const randomIndex = Math.floor(Math.random() * loadingArray.length);
    return loadingArray[randomIndex];
  };

  useEffect(() => {
    getLoaderGif();
    setGifLoader(getLoaderGif());
  }, []);

  return (
    <>
      <div className="preloader">
        <h2>
          <img src={gifLoader} alt="loading" />
          בטעינה...
        </h2>
      </div>
    </>
  );
}
export default Loader;

