import "../../assets/css/ImageForm.css";
import { useState, useRef } from "react";
import axios from 'axios';
import Loader from '../Loader';
import PetDetails2 from "./PetDetails2";
import Button from '@mui/material/Button';
axios.defaults.baseURL = 'http://127.0.0.1:8080/route';


// drag drop file component
const ImageForm = () => {

        // drag state
        const [dragActive, setDragActive] = useState(false);
        const [image, setImage] = useState({ preview: '', data: '' });
        const [response, setResponse] = useState("");
        const [dragText, setDragText] = useState("Drag and drop your file here or");
        const [uploadText, setUploadText] = useState("Upload a file");

        // ref
        const inputRef = useRef(null);
        const [loading, setLoading] = useState(false);

        const [pet_type, setPetType] = useState("");
        const [pet_breeds, setPetBreeds] = useState("");

        const [errMassage, setErrMassage] = useState("");

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
                        setDragText("")
                        setUploadText("")
                }
        };

        // triggers when file is selected with click
        const handleChange = (e) => {
                e.preventDefault();
                if (e.target.files && e.target.files[0]) {
                        const img = {
                                preview: URL.createObjectURL(e.target.files[0]),
                                data: e.target.files[0],
                        }
                        setImage(img)
                        setDragText("")
                        setUploadText("")
                }
        };

        // triggers the input when the button is clicked
        const onButtonClick = () => {
                inputRef.current.click();
        };

        const handleSubmit = async (e) => {
                e.preventDefault();
                let formData = new FormData();
                formData.append('file', image.data);

                try {
                        setLoading(true);
                        const res = await axios.post('/uploadImage', formData);
                        if (res.data.error === "No file was uploaded.") {
                                setLoading(false);
                                setErrMassage(`אופס! נראה ששכחת להעלות תמונה`);
                        }
                        else if (res.data.error === "Internal server error.") {
                                setLoading(false);
                                setErrMassage(`.אופס! נראה שהעלת סוג קובץ לא נכון\n .jpg, jpeg, png :יש לעלות קבצים מסוג`);
                        }
                        else if (res.data.error === "File upload failed.") {
                                setLoading(false);
                                setErrMassage(`1 MB אופס! יש לעלות קובץ עד`);
                        }
                        else {
                                setPetType(res.data.pet_type);
                                setPetBreeds(res.data.breeds);
                                setResponse(res.data);
                                setLoading(false);
                        }
                } catch (err) {
                        setLoading(false);
                        setErrMassage(err.message);
                        console.log(err);
                }
        };

        return (
                <>
                        {loading ? <Loader /> :
                                (!response ? <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
                                        <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} name="file" />
                                        <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : ""}>
                                                <div>
                                                        {image.preview && <img src={image.preview} width='300' height='300' />}
                                                        <p>{dragText}</p>
                                                        <button className="upload-button" onClick={onButtonClick}>{uploadText}</button>
                                                </div>
                                        </label>
                                        {dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div>}
                                        <br></br>
                                        <Button variant="contained" type='submit' onClick={handleSubmit}>שלח</Button>
                                        <br></br>
                                        <p>{errMassage}</p>
                                </form>
                                        : <PetDetails2 pet_type={pet_type} pet_breeds={pet_breeds} />)
                        }
                </>
        );
};

export default ImageForm;