//good article - https://programmingfields.com/redirect-to-component-with-props-using-usenavigate-hook/

import { useLocation, useNavigate } from "react-router-dom";


const SimillarityResult = (props) => {
        const navigate = useNavigate();
        const location = useLocation();
        console.log('location', location)

        const { similarPets } = props;

        /*try {
                // Send POST request
                const res = await axios.post("/petSimilarity", formData);
                // HTTP req successful
                setFormSuccess("Data received correctly");
        }*/
        return (
                <div>{location.state.similarPets}</div>
        );
}
export default SimillarityResult;