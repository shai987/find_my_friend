
const RonShai = () => {
        return (
                <div>
                        <form method="post" encType="multipart/form-data" action="http://127.0.0.1:8080/route/add">
                                <label htmlFor="name">שם קובץ</label>
                                <input type="text" id="name" name="name" />
                                <label htmlFor="upfile">העלה תמונה</label>
                                <input type="file" id="upfile" name="upfile" />
                                <input type="submit" value="Submit" />
                        </form>
                </div>
        );
}
export default RonShai;


