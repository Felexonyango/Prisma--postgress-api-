import * as dotenv from 'dotenv';
 import express, {  Application } from 'express'
 import cors from 'cors'
 const app:Application = express();
 app.use(express.json());
 dotenv.config();

 app.use(cors());

 app.use('/api/users',require("./routes/user"))

const PORT = process.env.PORT;
 app.listen(PORT, ()=> console.log(`Server started at ${PORT}`));