
export class UpdateTeacherDto{

    constructor(
        public name?:string,
        public email?:string,
        public gender?:string,
        public address?:string,
        public profession?:string,
    ){}

    static update( object: {[key:string]:any} ): [string?, UpdateTeacherDto?]{
        const { name, email, gender, address, profession } = object;

        return [undefined, new UpdateTeacherDto( name, email, gender, address, profession )];
    }
}