import React from 'react';
import './static/styles/footer.css';

function Footer() {

    return (
        <div className='footer'>
            <p>
                This website was built using React in a 
                Vite environment, with vanilla CSS styling.{' '}
                <a href='https://github.com/bpruitt63/portfolio'
                    target='blank'>
                    View the source code here.
                </a>
            </p>
        </div>
    );
};

export default Footer;