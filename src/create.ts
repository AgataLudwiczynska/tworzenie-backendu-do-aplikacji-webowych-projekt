import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    try{
        const data = [
            { name:"Dark", genre:"Fantastycznonaukowy", platform:"Netflix", yearStart:2017, yearEnd:2020},
            { name:"Friends", genre:"Komedia", platform:"HBO GO", yearStart:1994, yearEnd:2004},
            { name:"1899", genre:"Sci-Fi", platform:"Netflix", yearStart:2022, yearEnd:2022},
            { name:"The Walking Dead", genre:"Postapo", platform:"Canal+ Online", yearStart:2010, yearEnd:2022},
            { name:"Wikingowie", genre:"Historyczny", platform:"Netflix", yearStart:2013, yearEnd:2020},
            { name:"Ragnarok", genre:"Fantasy", platform:"Netflix", yearStart:2020, yearEnd:2023},
        ];

        const res = await prisma.serial.createMany({
            data,
            skipDuplicates: true,
        })

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