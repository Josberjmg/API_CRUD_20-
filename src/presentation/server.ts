import express from "express";
import { envs } from "../config/envs";
import { AppRoutes } from "./routes";

export class Server{
    private app = express();
    
    public start(){
        // middlewares
        this.app.use( express.json() ) // json
        this.app.use( express.urlencoded( {extended: true} ) ) // www-form-urlencoded

        this.app.use( AppRoutes.routes );

        // levantar backend
        this.app.listen(envs.PORT, ()=>{
            console.log(`Server runing on port ${envs.PORT}`);
        })
    }
}