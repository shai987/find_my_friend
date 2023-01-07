import { useState, useEffect } from "react";


const RonShai = () => {
        const [data, setData] = useState(null);

        useEffect(() => {
                fetch("http://127.0.0.1:8080/route")
                        .then((res) => res.json())
                        .then((data) => setData(data.body));
        }, []);

        return (
                <>
                        <div>{data}</div>
                        <form method="post" encType="multipart/form-data" action="http://127.0.0.1:8080/route/add">
                                <label htmlFor="name">העלה תמונה</label>
                                <input type="text" id="name" name="name" />
                                <label htmlFor="upfile">העלה תמונה</label>
                                <input type="file" id="upfile" name="upfile" />
                                <input type="submit" value="Submit" />
                        </form>
                </>
        );
}
export default RonShai;