import "../../assets/css/ImageForm.css"
import { useState, useRef } from "react";
import axios from 'axios';
import Loader from '../Loader';
import PetDetails from "./PetDetails";
axios.defaults.baseURL = 'http://127.0.0.1:8080/route';


// drag drop file component
const ImageForm = () => {
        // drag state
        const [dragActive, setDragActive] = useState(false);
        const [image, setImage] = useState({ preview: '', data: '' });
        const [response, setResponse] = useState("");
        const [dragText, setDragText] = useState("Drag and drop your file here or")
        const [uploadText, setUploadText] = useState("Upload a file")
        // ref
        const inputRef = useRef(null);
        const [loading, setLoading] = useState(false);
        
        const[pet_type, setPetType] = useState(""); 
        const[pet_breeds, setPetBreeds]=useState("");

        // handle drag events
        const handleDrag = (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (e.type === "dragenter" || e.type === "dragover") {
                        setDragActive(true);
                } else if (e.type === "dragleave") {
                        setDragActive(false);
                }
        };

        // triggers when file is dropped
        const handleDrop = (e) => {
                e.preventDefault();
                e.stopPropagation();
                setDragActive(false);
                if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                        const img = {
                                preview: URL.createObjectURL(e.dataTransfer.files[0]),
                                data: e.dataTransfer.files[0]
                        }
                        setImage(img)
                }
        };

        // triggers when file is selected with click
        const handleChange = (e) => {
                e.preventDefault();
                const img = {
                        preview: URL.createObjectURL(e.target.files[0]),
                        data: e.target.files[0],
                }
                setImage(img)
                if (e.target.files && e.target.files[0]) {
                        // handleFiles(e.target.files);
                }
        };

        // triggers the input when the button is clicked
        const onButtonClick = () => {
                inputRef.current.click();
        };

        const handleSubmit = async (e) => {
                e.preventDefault();
                setDragText("");
                setUploadText("");
                let formData = new FormData();
                formData.append('file', image.data);

                try {
                        setLoading(true);
                        // const res = await axios.post('http://127.0.0.1:8080/route/add', formData);
                        const res = await axios.post('/add', formData);
                        setPetType(res.data.pet_type);
                        setPetBreeds(res.data.breeds);
                        setResponse(res.data);
                        setLoading(false);
                } catch (err) {
                        setLoading(false);
                        console.log(err);
                }
        };

        return (
                <>
                        {loading ? <Loader /> :
                                (!response? <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={handleSubmit}>
                                        <input ref={inputRef} type="file" id="input-file-upload" onChange={handleChange} />
                                        <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : ""}>
                                                <div>
                                                        {image.preview && <img src={image.preview} width='300' height='300' />}
                                                        <p>{dragText}</p>
                                                        <button className="upload-button" onClick={onButtonClick}>{uploadText}</button>
                                                </div>
                                        </label>
                                        {dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div>}
                                        <button type='submit'>שלח</button>
                                        <div>{response}</div>
                                </form>: <PetDetails pet_type = {pet_type} pet_breeds = {pet_breeds} />)
                        }
                </>
        );
};

export default ImageForm;