import { Injectable } from '@nestjs/common';
import { Activity, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ActivityService {
  constructor(private readonly prismaService: PrismaService) {}

  async activity(
    activityWhereUniqueInput: Prisma.ActivityWhereUniqueInput,
  ): Promise<Activity> {
    return this.prismaService.activity.findUnique({
      where: activityWhereUniqueInput,
    });
  }

  async activities(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ActivityWhereUniqueInput;
    where?: Prisma.ActivityWhereInput;
    orderBy?: Prisma.ActivityOrderByWithRelationInput;
  }): Promise<Activity[]> {
    return this.prismaService.activity.findMany({ ...params });
  }

  async createActivity(data: Prisma.ActivityCreateInput): Promise<Activity> {
    return this.prismaService.activity.create({ data });
  }

  async updateActivity(params: {
    where: Prisma.ActivityWhereUniqueInput;
    data: Prisma.ActivityUpdateInput;
  }): Promise<Activity> {
    return this.prismaService.activity.update({ ...params });
  }

  async deleteActivity(
    where: Prisma.ActivityWhereUniqueInput,
  ): Promise<Activity> {
    return this.prismaService.activity.delete({ where });
  }
}
