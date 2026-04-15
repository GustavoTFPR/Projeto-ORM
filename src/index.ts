import "reflect-metadata";
import { AppDataSource } from "../data-soucer";
import { User } from "./entity/User";
async function  main() {
    try{
        await AppDataSource.initialize();
        console.log("banco conectado")
        const userRepository =AppDataSource.getRepository
        (User);

        const newUser = userRepository.create({
            firstName: "Daniel",
            lastName: "Santos",
        });

        await userRepository.save(newUser);
        const allUsers = await userRepository.find();
        console.log("usuario cadastrado ", allUsers);


    }catch(error)
    {console.log("erro", error)

    }
    
}
main();