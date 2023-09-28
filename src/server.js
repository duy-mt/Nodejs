import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
// import connectDB from './config/'
import initWebRouter from "./routes/web";
import cors from 'cors';
require('dotenv').config();

let app = express();

//config app
app.use(cors({ origin: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

viewEngine(app);
initWebRouter(app);

let port = process.env.PORT || 6969;

app.listen(port, () => {
    console.log("Backend Nodejs is running on port: " + port)
});
