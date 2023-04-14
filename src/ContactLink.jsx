import React from 'react';

function ContactLink({type, link, image, label}) {
    return (
        <div className='contactLink'>
            <img className='contactIcon'
                src={image}
                alt={type} />
            <a href={link}
                target='blank'>
                    {label}
            </a>
        </div>
    );
};

export default ContactLink;