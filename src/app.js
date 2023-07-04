import express from "express";
import cors from "cors";
import morgan from "morgan";

import config from "./config";

import loginRoutes from './routes/login.routes'
import clientsRoutes from './routes/clients.routes'
import ordersRoutes from './routes/orders.routes'
import companyRoutes from './routes/company.routes'


const app = express();

// settings
app.set("port", config.port);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use(loginRoutes);
app.use(clientsRoutes);
app.use(ordersRoutes);
app.use(companyRoutes);


export default app;