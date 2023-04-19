//good article - https://programmingfields.com/redirect-to-component-with-props-using-usenavigate-hook/
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../assets/css/Slider.css";
//import {BSON} from 'bson';

const SimillarityResult = () => {
  const location = useLocation();

  const [results] = useState(location.state.similarPets);
  console.log(results);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = results.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, results]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  // <img src={`data:image/png;base64,${location.state.similarPets[0].img.data}`} />

  return (
    <section className="section">
      <div className="title">
        <h2>התוצאות שחזרו</h2>
      </div>
      <div className="section-center">
        {results.map((item, indexResults) => {
                console.log(indexResults)
                console.log(item)
          const {
            petName,
            petType,
            petGender,
            petBreeds,
            location,
            img,
            note,
          } = item;
          let position = "nextSlide";
          if (indexResults === index) {
            position = "activeSlide";
          }
          if (
            indexResults === index - 1 ||
            (index === 0 && indexResults === results.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={`basicArticle ${position}`} key={indexResults}>
                {/*<img src={`data:image/png;base64,${img.data}`} alt={petName} className="person-img"/>*/}
              <h4>{petName}</h4>
              <p className="text">{petType}</p>
              <p className="text">{petGender}</p>
              <p className="text">{petBreeds}</p>
              <p className="text">{location}</p>
              <p className="text">{note}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <i className="fa fa-angle-double-left" />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <i className="fa fa-angle-double-right" />
        </button>
      </div>
    </section>

    /*<div>{location.state.similarPets[0].petName}     
                <img src={`data:image/png;base64,${location.state.similarPets[0].img.data}`} />          
                </div>*/
  );
};
export default SimillarityResult;








