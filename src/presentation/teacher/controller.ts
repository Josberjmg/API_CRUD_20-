import { Request, Response } from "express"
import { CreateTeacherDto } from "../../domain/dtos/teacher/create-teacher.dto";
import { TeacherService } from "../services/teacher.service";
import { UpdateTeacherDto } from "../../domain/dtos/teacher/update-teacher.dto";
import { PaginationDto } from "../../domain/dtos/pagination/pagination.dto";

export class TeacherController{

    constructor(private teacherService: TeacherService){}

    create = (req: Request, res: Response) => {
        const [error, createTeacherDto] = CreateTeacherDto.create( req.body );
        if( error ) return res.status(400).json({error});
        this.teacherService.create( createTeacherDto! )
        .then(teacher=> res.json(teacher))
        .catch(error=> res.status(500).json(error));
    }
    update = (req:Request, res:Response) => {
        const id = req.params.id
        const [error, updateTeacherDto] = UpdateTeacherDto.update(req.body)
        if(error) return res.status(400).json({error})
        this.teacherService.update(updateTeacherDto!, id!)
        .then(teacher => res.json(teacher))
        .catch(error => res.status(500).json(error))
    };
    
    delete = (req:Request, res:Response) => {
    const id = req.params.id
    this.teacherService
        .delete(id!)
        .then(teacher => res.json(teacher))
        .catch(error => res.status(500).json(error))
    };
    
    
    findAll = (req: Request, res: Response) => {
        const [error, paginationDto] = PaginationDto.create(req.query);
        if( error ) return res.status(400).json({error});
    
        this.teacherService.findAll( paginationDto! )
        .then(teachers => res.json(teachers))
        .catch(error => res.status(500).json(error));
    };
    
    findOne = (req: Request, res: Response) => {
    const id = req.params.id
        this.teacherService.findOne(id!)
        .then(teacher => res.json(teacher))
        .catch(error => res.status(500).json(error))  
    };
}
