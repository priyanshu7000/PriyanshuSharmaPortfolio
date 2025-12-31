import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import contactRouter from './Routes/contact.router.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());

//Routes
app.use('/api/Contact', contactRouter);



const Port = process.env.PORT || 5000;
app.listen(Port, ()=>{
    console.log(`Server is running on port ${Port}`);
});