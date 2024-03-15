import express from 'express';

const cors = require('cors');

import { testConecction } from '../dataBase/index.js';

const port = 3000;

const app = express();

app.use(cors());

 const startServer = async (routes) => {

    app.use(express.json());

    app.use(routes);

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });

    await testConecction();
}

export default startServer;