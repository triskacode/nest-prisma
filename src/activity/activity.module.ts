import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ActivityService } from './activity.service';
import { ActivityController } from './activity.controller';

@Module({
  imports: [PrismaModule],
  providers: [ActivityService],
  controllers: [ActivityController],
})
export class ActivityModule {}
