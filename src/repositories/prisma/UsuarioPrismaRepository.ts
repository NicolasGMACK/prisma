import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UsuarioPrismaRepository {

    async getAll(){
        const users = await prisma.user.findMany({
            include: {
                posts: true
            }
        });
        console.log(users);
        return users;
    }

    async getById(){
        const user = await prisma.user.findFirst({
            where: {
                id: 'e046ff4d-7a57-4348-a922-ac61aa750460'
            }
        });
        console.log(user);
        return user;
    }

    async create(){
        const newUser = await prisma.user.create({
            data: {
                name: "Nick",
                email: "nicolas@gmail.com",
                password: "12345678"
            }
        });
        console.log(newUser);
        return newUser;
    }

    async update(){
        const updateUser = await prisma.user.update({
            data: {
                name: 'JEFF'
            },
            where: {
                id: 'e046ff4d-7a57-4348-a922-ac61aa750460'
            }
        });
        console.log(updateUser);
        return updateUser;
    }

    async delete(){
        const deleteUser = await prisma.user.delete({
            where: {
                id: 'e046ff4d-7a57-4348-a922-ac61aa750460'
            }
        });
        console.log(deleteUser);
        return deleteUser;
    }
}

const usuarioPrismaRepository = new UsuarioPrismaRepository();
usuarioPrismaRepository.getAll();

export default UsuarioPrismaRepository;