import React, {useState} from 'react';

function ContactForm() {

    const initialState = {name: '', email: '', message: ''};
    const [data, setData] = useState(initialState);
    const [errors, setErrors] = useState([]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData(d => ({...d, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        if (!validate()) return false;
        console.log(data);
        setData(initialState);
    };

    const validate = () => {
        const {name, email, message} = data;
        const err = [];
        if (!name) err.push('Name is required');
        if (name.length > 50) err.push('Name must be under 50 characters');
        if (!email) err.push('Email is required');
        if (email.length > 60) err.push('Email must be under 60 characters');
        if (email && !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) err.push('Not a valid email format');
        if (!message) err.push('Message is required');
        if (message.length > 1000) err.push('Message cannot exceed 1000 characters');
        console.log(name)
        if (err.length) {
            setErrors(err);
            return false;
        };
        return true;
    };

    return (
        <>
            {errors.map(e => 
                <p key={e}>{e}</p>)}
            <form onSubmit={handleSubmit}>
                <input type='text'
                        name='name'
                        placeholder='Your name'
                        value={data.name}
                        onChange={handleChange} />
                <input type='text'
                        name='email'
                        placeholder='Your email'
                        value={data.email}
                        onChange={handleChange} />
                <textarea name='message'
                        placeholder='Message'
                        rows='8'
                        value={data.message}
                        onChange={handleChange} />
                <button type='submit'>Submit</button>
            </form>
        </>
    );
};

export default ContactForm;