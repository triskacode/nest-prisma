import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';
import { ActivityModule } from './activity/activity.module';

@Module({
  imports: [PrismaModule, ActivityModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
