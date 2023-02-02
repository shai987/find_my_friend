
const PetDetails = () => {
        return (
                <div>
                        <form onSubmit={handleSubmit} className='form'>
                                <h1>React form</h1>
                                <AlertSuccess success={formSuccess} />
                                <AlertError errors={formErrors} />
                                <div>
                                        <label htmlFor="">שם החיה</label>
                                        <input
                                                type='text'
                                                name='name'
                                                className='input'
                                                value={formData.name}
                                                onInput={handleChange}
                                        />
                                </div>
                                <div>
                                        <label htmlFor="">סוג החיה</label>
                                        <input
                                                type='text'
                                                name='petType'
                                                className='input'
                                                value={formData.name}
                                                onInput={handleChange}
                                        />
                                </div>
                                <div>
                                        <label htmlFor="">מין החיה</label>
                                        <input
                                                type='number'
                                                name='age'
                                                className='input'
                                                value={formData.age}
                                                onInput={handleChange}
                                        />
                                </div>
                                <div>
                                        <label htmlFor="">גזע החיה</label>
                                        <input
                                                type='text'
                                                name='email'
                                                className='input'
                                                value={formData.email}
                                                onInput={handleChange}
                                        />
                                </div>
                                <div>
                                        {/* אפשר להשתמש בקונטקסט לצורך שינוי המלל - אם מישהו איבד "איפה נראה חארונה", מישהו מצא "בלב בלה" */}
                                        <label htmlFor="">מיקום גיאוגרפי</label>
                                        <input
                                                type='text'
                                                name='email'
                                                className='input'
                                                value={formData.email}
                                                onInput={handleChange}
                                        />
                                </div>
                                <input type='submit' className='button' value='שלח' />
                        </form >
                </div >
        );
}

export default PetDetails;
