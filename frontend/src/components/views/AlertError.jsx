const AlertError = ({ errors }) => {
        if (errors.length === 0) {
                return <></>;
        }

        return (
                <ul className='error'>
                        {errors.map((error) => (
                                <li key={error}>{error}</li>
                        ))}
                </ul>
        );
};

export default AlertError;