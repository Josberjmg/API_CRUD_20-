import { TeacherEntity } from "../entities/teacher.entity";

export class TeacherMapper{

    static fromEntity( object: {[key:string]:any} ):TeacherEntity{
        const {id ,_id, name, email, gender, address, profession} = object;

        return new TeacherEntity(id || _id , name, email, gender, address, profession);
    }
}