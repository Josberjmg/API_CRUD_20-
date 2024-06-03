import { MongoDB } from "./data/mongodb/database";
import { Server } from "./presentation/server";


(async ()=>{
    main();
})()


async function main(){
    // levantar la base de datos
    await MongoDB.connect();

    // levantar el servior
    new Server().start();
}