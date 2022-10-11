import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Activity } from '@prisma/client';
import { ActivityService } from './activity.service';

@Controller('activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Get()
  async getActivities(@Query('email') email?: string): Promise<Activity[]> {
    return this.activityService.activities({
      where: {
        email: { contains: email ?? '' },
      },
    });
  }

  @Get(':id')
  async getActivityById(@Param('id') id: string): Promise<Activity> {
    return this.activityService.activity({ id: +id });
  }

  @Post()
  async createActivity(
    @Body() createDto: { title: string; email: string },
  ): Promise<Activity> {
    return this.activityService.createActivity({ ...createDto });
  }

  @Patch(':id')
  async updateActivity(
    @Param('id') id: string,
    @Body() updateDto: { title?: string; email?: string },
  ): Promise<Activity> {
    return this.activityService.updateActivity({
      where: { id: +id },
      data: { ...updateDto },
    });
  }

  @Delete(':id')
  async deleteActivity(@Param('id') id: string): Promise<Activity> {
    return this.activityService.deleteActivity({ id: +id });
  }
}
