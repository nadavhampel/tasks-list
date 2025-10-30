// apps/api/src/tasks/tasks.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.task.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async create(title: string) {
    return this.prisma.task.create({
      data: {
        title,
        completed: false,
      } as Prisma.TaskCreateInput,
    });
  }

  async complete(id: string) {
    return this.prisma.task.update({
      where: { id },
      data: { completed: true } as Prisma.TaskUpdateInput,
    });
  }

  async update(id: string, updateData: { completed?: boolean }) {
    return this.prisma.task.update({
      where: { id },
      data: updateData as Prisma.TaskUpdateInput,
    });
  }

  async delete(id: string) {
    return this.prisma.task.delete({
      where: { id },
    });
  }
}
