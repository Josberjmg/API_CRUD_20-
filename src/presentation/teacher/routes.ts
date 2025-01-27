import { Router } from "express";
import { TeacherController } from "./controller";
import { TeacherService } from "../services/teacher.service";

export class TeacherRoutes{

    static get routes():Router{
        const routes = Router();
        const teacherService = new TeacherService();
        const controller = new TeacherController(teacherService);
        routes.post( "/", controller.create );
        routes.get( "/", controller.findAll );
        routes.get( "/:id", controller.findOne );
        routes.put( "/:id", controller.update );
        routes.delete( "/:id", controller.delete );

        return routes;

    }
}