import path from "path";

import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";

import UserController from './routes/users';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', UserController);

export default app;
