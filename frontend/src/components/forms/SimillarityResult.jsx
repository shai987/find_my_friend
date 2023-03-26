const SimillarityResult = (props) => {
        const { similarPets } = props;

        /*try {
                // Send POST request
                const res = await axios.post("/petSimilarity", formData);
                // HTTP req successful
                setFormSuccess("Data received correctly");
        }*/
        return (
                <div>{similarPets}</div>
        );
}
export default SimillarityResult;