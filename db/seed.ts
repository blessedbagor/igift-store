import { PrismaClient } from '@prisma/client';
import createSampleData from './sample-data';

async function main() {
  try {
    // Retrieve sample data
    const sampleData = await createSampleData();

    // Prepare Prisma client
    const prisma = new PrismaClient();

    // Clear existing data
    console.log('Deleting existing data...');
    await prisma.product.deleteMany();
    await prisma.account.deleteMany();
    await prisma.session.deleteMany();
    await prisma.verificationToken.deleteMany();
    await prisma.user.deleteMany();

    // Seed products
    console.log('Seeding products...');
    await prisma.product.createMany({ data: sampleData.products });

    // Seed users (data already contains hashed passwords)
    console.log('Seeding users...');
    await prisma.user.createMany({ data: sampleData.users });

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    process.exit(); // Ensure the process exits
  }
}

main();
