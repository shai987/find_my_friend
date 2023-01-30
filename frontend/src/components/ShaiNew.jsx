import { useState } from "react";
import axios from 'axios';
import AlertSuccess from "./views/AlertSuccess";
import AlertError from "./views/AlertError";
import '../assets/css/ShaiNew.css'

const RonShai = () => {

        const [image, setImage] = useState({ preview: '', data: '' });
        const [status, setStatus] = useState('');

        const handleFileChange = (e) => {
                const img = {
                        preview: URL.createObjectURL(e.target.files[0]),
                        data: e.target.files[0],
                }
                setImage(img)
        };

        const handleSubmit = async (e) => {
                e.preventDefault();
                let formData = new FormData();

                formData.append('file', image.data);

                try {
                        // Send POST request
                        // const response = await axios.post('http://127.0.0.1:8080/route/add', formData)
                        //.then(response => console.log(response));
                        const response = await fetch('http://127.0.0.1:8080/route/add', {
                                method: 'POST',
                                body: formData,
                        })
                        if (response) setStatus(response.statusText)
                } catch (err) {
                        console.log(err);
                }
        };

        return (
                <div>
                        <h1>Upload to server</h1>
                        {image.preview && <img src={image.preview} width='100' height='100' />}
                        <hr></hr>
                        <form onSubmit={handleSubmit}>
                                <input type='file' name='file' onChange={handleFileChange}></input>
                                <button type='submit'>Submit</button>
                        </form>
                        {status && <h4>{status}</h4>}
                </div>
        );
}
export default RonShai;