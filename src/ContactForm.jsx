import React, {useState} from 'react';
import emailjs from '@emailjs/browser';

const publicKey = '7IdLWSrEU9nztkneg';

function ContactForm() {

    const initialState = {name: '', email: '', message: '', disabled: true};
    const [data, setData] = useState(initialState);
    const [errors, setErrors] = useState([]);
    const [message, setMessage] = useState('');


    const handleChange = (e) => {
        const {name, value} = e.target;
        const newData = {...data};
        newData[name] = value;
        if (newData.name.length && newData.email.length && newData.message.length) {
            newData.disabled = false;
        } else {
            newData.disabled = true;
        };
        setData(newData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        if (!validate()) return false;
        const emailData = {...data};
        delete emailData.disabled;
        try {
            await emailjs.send('portfolio_contact', 'portfolio_template', emailData, publicKey);
            toast('Email sent');
        } catch (err) {
            setErrors([`${err.name}: ${err.message}`]);
        };
        setData(initialState);
    };

    const toast = (msg) => {
        setMessage(msg);
        setTimeout(() => {setMessage('')}, 2000);
    }

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
        if (err.length) {
            setErrors(err);
            return false;
        };
        return true;
    };

    return (
        <>
            {errors.map(e => 
                <p key={e} className='error'>{e}</p>)}
            {message && 
                <p className='success'>{message}</p>}
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
                <button type='submit'
                        disabled={data.disabled}>
                            Submit
                </button>
            </form>
        </>
    );
};

export default ContactForm;