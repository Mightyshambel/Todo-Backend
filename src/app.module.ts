import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from 'src/task/task.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:securePassword123@cluster0.ijtl1.mongodb.net/',
    ),
    TaskModule,
  ],
})
export class AppModule {}
