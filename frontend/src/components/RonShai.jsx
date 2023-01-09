import { useState } from "react";
import axios from 'axios';
import AlertSuccess from "./views/AlertSuccess";
import AlertError from "./views/AlertError";

const RonShai = () => {
        // use to set up and reset our f
        const initialFormData = {
                name: '',
        };

        const [formData, setFormData] = useState(initialFormData);
        const [formSuccess, setFormSuccess] = useState('');
        const [formErrors, setFormErrors] = useState([]);

        const handleSubmit = async (e) => {
                e.preventDefault();

                try {
                        // Send POST request
                        await axios.post('http://127.0.0.1:8080/route/add', formData);

                        // HTTP req successful
                        setFormSuccess('Data received correctly');

                        // Reset form data
                        setFormData(initialFormData);
                } catch (err) {
                        handleErrors(err);
                }
        };

        const handleErrors = (err) => {
                if (err.response.data && err.response.data.errors) {
                        // Handle validation errors
                        const { errors } = err.response.data;

                        let errorMsg = [];
                        for (let error of errors) {
                                const { msg } = error;

                                errorMsg.push(msg);
                        }

                        setFormErrors(errorMsg);
                } else {
                        // Handle generic error
                        setFormErrors(['Oops, there was an error!']);
                }
        };

        const handleChange = (e) => {
                setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                });
                setFormErrors([]);
                setFormSuccess('');
        };

        return (
                <div>
                        <form onSubmit={handleSubmit} encType="multipart/form-data" className="form">
                                <h1>React form</h1>
                                <AlertSuccess success={formSuccess} />
                                <AlertError errors={formErrors} />
                                <div>
                                        <label htmlFor="name">Name</label>
                                        <input
                                                id="name"
                                                type="text"
                                                name="name"
                                                className="input"
                                                value={formData.name}
                                                onInput={handleChange}
                                        />
                                </div>
                                <div>
                                        <label htmlFor="upfile">Image</label>
                                        <input type="file" id="upfile" name="upfile" />
                                </div>
                                <input type="submit" className="button" value="Submit" />
                        </form>
                </div>
        );
}
export default RonShai;