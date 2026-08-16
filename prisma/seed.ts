import { prisma } from "../prisma";



async function seed() {
    await prisma.user.createMany({
        data: [
            {
                name: "Alice Smith",
                email: "alice@gmail.com",
                age: 28,
                isMarried: false,
                nationality: "American",
            },
            {
                name: "Bob Jones",
                email: "bob@gmail.com",
                age: 35,
                isMarried: true,
                nationality: "British",
            },
            {
                name: "Charlie Brown",
                email: "charlie@gmail.com",
                age: 42,
                isMarried: false,
                nationality: "American",
            },
            {
                name: "David Lee",
                email: "david@gmail.com",
                age: 29,
                isMarried: true,
                nationality: "Korean",
            },
            {
                name: "Eva Martinez",
                email: "eva@gmail.com",
                age: 31,
                isMarried: false,
                nationality: "Spanish",
            },
        ],
        skipDuplicates: true,
    })

}

seed().then(() => prisma.$disconnect());