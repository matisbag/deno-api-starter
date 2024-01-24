import { type PrismaClient } from './generated/client/index.d.ts';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const Prisma = require('./generated/client/index.js');

const prisma: PrismaClient = new Prisma.PrismaClient();

export default prisma;
