import 'dotenv/config'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../src/generated/prisma/client.js'
import * as bcrypt from 'bcrypt'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

async function main() {
  const hash = await bcrypt.hash('Admin1234!', 10)
  await prisma.user.upsert({
    where: { email: 'admin@qaplatform.com' },
    update: {},
    create: {
      name: 'Admin',
      email: 'admin@qaplatform.com',
      passwordHash: hash,
      role: 'ADMIN'
    }
  })
  console.log('Admin user created: admin@qaplatform.com / Admin1234!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
