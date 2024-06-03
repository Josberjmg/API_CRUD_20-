import { Router } from "express";
import { TeacherRoutes } from "./teacher/routes";

export class AppRoutes{

    static get routes():Router{
        const routes = Router();

        routes.use( "/teacher", TeacherRoutes.routes );

        return routes;

    }
}