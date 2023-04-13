//good article - https://programmingfields.com/redirect-to-component-with-props-using-usenavigate-hook/

import { useLocation } from "react-router-dom";


const SimillarityResult = (props) => {
        const location = useLocation();
        console.log('location', location);

        return (
                <div>{location.state.similarPets}</div>
        );
}
export default SimillarityResult;