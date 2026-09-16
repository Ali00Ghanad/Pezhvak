import express from "express";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log("REQUEST:", req.method, req.url);
    next();
});

app.use("/users", userRoutes);

export default app;