import mongoose from "mongoose";
import { envs } from "../../config/envs";

export class MongoDB{

    static async connect(){
        try{
            await mongoose.connect( envs.MONGO_URL , {dbName:envs.MONGO_DB_NAME} );
            console.log("Mongo Connected!");
        }catch(error){
            throw error;
        }
    }
}