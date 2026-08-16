import "dotenv/config";
import express from "express";
import { prisma } from "./prisma";



const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running!');
});


app.get('/users', async (_, res) => {
  const users = await prisma.user.findFirst({
    where: { email: 'alice@gmail.com' }
  });
  res.json(users);
})


app.put('/users', async (_, res) => {
  const updatedUsers = await prisma.user.update({
    where: {
      email: 'bob@gmail.com'
    },
    data: {
      name: 'Ayan',
      age: 20,
      isMarried: true,
      nationality: 'Bangladeshi'
    }
  })
  res.json(updatedUsers);
})

app.delete('/users', async (_, res) => {
  const deletedUsers = await prisma.user.delete({
    where: {
      email: 'alice@gmail.com'
    }
  })
  res.json(deletedUsers);
})

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
