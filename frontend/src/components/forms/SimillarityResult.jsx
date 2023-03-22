const SimillarityResult = (props) => {
        const { pet_type } = props;
        const X = {
                petType: pet_type,
        };

        /*try {
                // Send POST request
                const res = await axios.post("/petSimilarity", formData);
                // HTTP req successful
                setFormSuccess("Data received correctly");
        }*/
        return (
                <div>SimillarityResult</div>
        );
}
export default SimillarityResult;