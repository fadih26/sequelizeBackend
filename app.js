import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import db from './models/index.js';
import cookieParser from 'cookie-parser';
import BookRoutes from './routes/BookRoutes.js'
import AuthRoutes from './routes/AuthRoutes.js'



dotenv.config();

const app = express();
const port = process.env.PORT || 5000;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors("*"));
app.use(cookieParser());


app.use("/books",BookRoutes)
app.use("/user",AuthRoutes)


app.listen(port, async () => {
    console.log(`SERVER IS RUNNING ON PORT ${port}`);
    try {
        await db.sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await db.sequelize.sync();
        console.log('Database synced!');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})