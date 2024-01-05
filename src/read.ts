import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    try{
        const res = await prisma.serial.findMany(
            {
                where: {
                    yearStart:{
                        gte: 2017
                    }
                }
            }
        );
        console.log(res);
    } catch (err){
        console.log(err);
    } finally{
        async() => {
            await prisma.$disconnect();
        }
    }
}

main();