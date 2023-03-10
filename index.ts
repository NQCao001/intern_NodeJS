import express from 'express';
import {AppDataSource} from "./src/data-source";
import {router} from "./src/router/router";
const app = express();
AppDataSource.initialize().then(() => {
    console.log('Connect Database Success!')
});
app.use(express.json());
app.use('', router);
app.listen(8080, () => {
    console.log('Server is running !')
});