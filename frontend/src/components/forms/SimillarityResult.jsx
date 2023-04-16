//good article - https://programmingfields.com/redirect-to-component-with-props-using-usenavigate-hook/
import React, { useState, useEffect } from 'react';

import { useLocation } from "react-router-dom";
//import {BSON} from 'bson';

const SimillarityResult = (props) => {
        const location = useLocation();
        console.log('location', location);
        
       
              //location.state.similarPets[0].img.data
        return (
                <div>{location.state.similarPets[0].petName}     
                <img src={`data:image/png;base64,${location.state.similarPets[0].img.data}`} />          
                </div>
        );
}
export default SimillarityResult;