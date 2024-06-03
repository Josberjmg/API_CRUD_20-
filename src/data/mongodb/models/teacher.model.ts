import mongoose from "mongoose";


const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "name is required"],
    },
    email: {
        type: String,
        require: [true, "email is required"],
    },
    gender: {
        type: String,
        require: [true, "gender is required"],
    },
    address: {
        type: String,
        require: [true, "address is required"],
    },
    profession: {
        type: String,
        require: [true, "profession is required"],
    },
});

export const TeacherModel = mongoose.model("Teacher", teacherSchema);