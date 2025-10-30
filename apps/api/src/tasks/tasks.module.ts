// apps/api/src/tasks/tasks.module.ts
import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService, PrismaService], // <- PrismaService provided here
  // if you want other modules to reuse PrismaService, export it:
  // exports: [PrismaService],
})
export class TasksModule {}
