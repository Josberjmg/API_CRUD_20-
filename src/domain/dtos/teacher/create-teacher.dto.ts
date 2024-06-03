

export class CreateTeacherDto{

    constructor(
        public name:string,
        public email:string,
        public gender:string,
        public address:string,
        public profession:string,
    ){}

    static create( object: {[key:string]:any} ): [string?, CreateTeacherDto?]{
        const { name, email, gender, address, profession} = object;

        if( !name ) return ["Missing name"];
        if( !email ) return ["Missing email"];
        if( !gender ) return ["Missing gender"];
        if( !address ) return ["Missing addresss"];
        if( !profession ) return ["Missing profession"];

        return [undefined, new CreateTeacherDto( name, email, gender, address, profession )];

    }

}