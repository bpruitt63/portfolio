import sporty from '../images/sporty.jpg';
import gamey from '../images/gamey.jpg';
import boatey from '../images/boatey.jpg';
import cashcount from '../images/cashcount.jpg';


export const projects = [
    {
        title: 'Sporty',
        image: {src: sporty, alt: 'Sporty Screenshot'},
        description: 'description',
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
                        <p>Demo credentials:</p>
                        <p>Company: demo</p>
                        <p>Admin User ID: demo</p>
                        <p>Admin Password: demo1234</p>
                     </>,
        link: 'https://cashcount.herokuapp.com/',
        video: 'https://www.loom.com/embed/e260c1462962423a8e192d4511bec167',
        backendFiles: 'https://github.com/bpruitt63/cashCount-backend',
        frontendFiles: 'https://github.com/bpruitt63/cashCount-frontend'
    },
    {
        title: 'Boatey',
        image: {src: boatey, alt: 'Boatey Screenshot'},
        description: 'description',
        link: 'https://boatey.herokuapp.com/',
        video: 'https://www.loom.com/embed/38885b03926643e8a1e868a2ccd8fc7a',
        backendFiles: 'https://github.com/bpruitt63/capstone2-backend',
        frontendFiles: 'https://github.com/bpruitt63/capstone2-frontend'
    },
    {
        title: 'Gamey',
        image: {src: gamey, alt: 'Gamey Screenshot'},
        description: 'description',
        link: 'https://gamey-project.herokuapp.com/',
        video: 'https://www.loom.com/embed/2dd8d96dce2c49a9b9c109c1f62d6511',
        singleRepo: 'https://github.com/bpruitt63/capstone1'
    }
];