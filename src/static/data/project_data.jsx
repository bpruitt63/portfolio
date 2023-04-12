import sporty from '../images/sporty.jpg';
import gamey from '../images/gamey.jpg';
import boatey from '../images/boatey.jpg';
import cashcount from '../images/cashcount.jpg';


export const projects = [
    {
        title: 'Sporty',
        image: {src: sporty, alt: 'Sporty Screenshot'},
        description: <>
                        <p>
                            Automated game scheduling dashboard that algorithmically 
                            builds schedule for YMCA youth sports league seasons.  
                            Made twice as fast the process of scheduling games, 
                            tracking results, ranking teams, and seeding tournaments.
                        </p>
                        <p>
                            React frontend, Node.js backend, PostgreSQL database.  
                            React-bootstrap styling
                        </p>
                        <p>
                            <span className='underlined'>
                                Demo credentials
                            </span><br/>
                            Email: demo@demo.com<br/>
                            Password: demo1234
                        </p>
                    </>,
        link: 'https://sporto-app.herokuapp.com/',
        video: 'https://www.loom.com/embed/befca497d2c443a2bec3e377b9e41c13',
        backendFiles: 'https://github.com/bpruitt63/sporty-backend',
        frontendFiles: 'https://github.com/bpruitt63/sporty-frontend'
    },
    {
        title: 'CashCount',
        image: {src: cashcount, alt: 'Cashcount Screenshot'},
        description: <>
                        <p>
                            Financial tracking dashboard built to improve 
                            cash tracking at YMCA by reducing counting errors, 
                            centralizing cash records, and automatically notifying 
                            leadership of cash variances.
                        </p>
                        <p>
                            React frontend, Node.js/Express backend, PostgreSQL 
                            database. Styled with React-Bootstrap.
                        </p>
                        <p>
                            <span className='underlined'>
                                Demo credentials
                            </span><br/>
                            Company: demo<br/>
                            Admin User ID: demo<br/>
                            Admin Password: demo1234
                        </p>
                     </>,
        link: 'https://cashcount.herokuapp.com/',
        video: 'https://www.loom.com/embed/e260c1462962423a8e192d4511bec167',
        backendFiles: 'https://github.com/bpruitt63/cashCount-backend',
        frontendFiles: 'https://github.com/bpruitt63/cashCount-frontend'
    },
    {
        title: 'Boatey',
        image: {src: boatey, alt: 'Boatey Screenshot'},
        description: <>
                        <p>
                            Dashboard for planning boat trips. Interacts with 
                            Marinas.com API to find local points of interest, 
                            Mapbox API to display local area maps and calculate 
                            distance between destinations, and Weatherbit API 
                            to display local weather.
                        </p>
                        <p>
                            React frontend, Node.js backend, PostgreSQL database.  
                            Reactstrap styling
                        </p>
                        <p>
                            <span className='underlined'>
                                Demo credentials
                            </span><br/>
                            Email: demo@demo.com<br/>
                            Password: demo1234
                        </p>
                    </>,
        link: 'https://boatey.herokuapp.com/',
        video: 'https://www.loom.com/embed/38885b03926643e8a1e868a2ccd8fc7a',
        backendFiles: 'https://github.com/bpruitt63/capstone2-backend',
        frontendFiles: 'https://github.com/bpruitt63/capstone2-frontend'
    },
    {
        title: 'Gamey',
        image: {src: gamey, alt: 'Gamey Screenshot'},
        description: <>
                        <p>
                            Web app for gamers. Interacts with RAWG API to find 
                            data on specific video games. Users can review games, 
                            ask and answer questions, and upvote/downvote reviews 
                            and answers.
                        </p>
                        <p>
                            Flask with Python, Jinja, Flask SQLAlchemy, Flask 
                            WTForms, Flask Bcrypt, JavaScript with axios, and 
                            PostgreSQL database.
                        </p>
                        <p>
                            <span className='underlined'>
                                Demo credentials
                            </span><br/>
                            Email: demo@demo.com<br/>
                            Password: demo1234
                        </p>
                    </>,
        link: 'https://gamey-project.herokuapp.com/',
        video: 'https://www.loom.com/embed/2dd8d96dce2c49a9b9c109c1f62d6511',
        singleRepo: 'https://github.com/bpruitt63/capstone1'
    }
];