import { PrismaClient } from '@prisma/client';

export class UserModel {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async selectAll() {
    const allUsers = await this.prisma.user.findMany();
    console.log(allUsers);
  }

  async create() {
    await this.prisma.user.create({
      data: {
        name: 'Alice',
        email: 'alice1@prisma.io',
        posts: {
          create: { title: 'Hello World' },
        },
        profile: {
          create: { bio: 'I like turtles' },
        },
      },
    });
  }
}
