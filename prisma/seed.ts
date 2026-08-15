import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
async function seed() {
    await prisma.user.createMany({
        data: [
            {
                name: "Alice Smith",
                email: "alice@gmail.com",
            },
            {
                name: "Bob Jones",
                email: "bob@gmail.com",
            },
        ],
        skipDuplicates: true,
    })

}

seed().then(() => prisma.$disconnect());