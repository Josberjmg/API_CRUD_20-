
import { TeacherModel } from "../../data/mongodb/models/teacher.model";
import { PaginationDto } from "../../domain/dtos/pagination/pagination.dto";
import { CreateTeacherDto } from "../../domain/dtos/teacher/create-teacher.dto";
import { UpdateTeacherDto } from "../../domain/dtos/teacher/update-teacher.dto";
import { TeacherEntity } from "../../domain/entities/teacher.entity";
import { TeacherMapper } from "../../domain/mappers/teacher.mapper";

export class TeacherService{


    async create( createTeacherDto: CreateTeacherDto ):Promise<TeacherEntity>{
        try {
            const teacher = await TeacherModel.create(createTeacherDto);
            if( !teacher ) throw new Error("Teacher not created!");

            await teacher.save();

            return TeacherMapper.fromEntity(teacher);
        } catch (error) {
            console.warn(error);
            throw error;
        }
    }
    async update(updateteacherDto:UpdateTeacherDto, id:string):Promise<TeacherEntity>{
        try {
            const teacher = await TeacherModel.findByIdAndUpdate({_id:id}, {...updateteacherDto}, {new:true});
            if(!teacher) throw Error('Error')
            await teacher.save();
            return TeacherMapper.fromEntity(teacher);
    
        } catch (error) {
            throw error; 
        }
    }
    
    
    async delete(id:string):Promise<TeacherEntity>{
        try {
            const teacher = await TeacherModel.findOneAndDelete({_id:id});
            if(!teacher) throw Error('Error')
            return TeacherMapper.fromEntity(teacher);
    
        } catch (error) {
            throw error; 
        }
    }
    async findOne(id:string):Promise<TeacherEntity>{
        try {
            const teacher = await TeacherModel.findOne({_id:id});
            if(!teacher) throw Error('Error')
            return TeacherMapper.fromEntity(teacher);
    
        } catch (error) {
            throw error; 
        }
    }
    async findAll(paginationDto: PaginationDto):Promise<TeacherEntity[]>{
        const { offset, limit } = paginationDto;
        try {
        const teachers = await TeacherModel.find({}).skip( offset ).limit(limit);
            
            return teachers.map(teachers => TeacherMapper.fromEntity(teachers));
        } catch (error) {
            throw error; 
        }
    }
}