import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';

const dbUrl = '';
@Module({
  imports: [
    MongooseModule.forRoot(dbUrl, {
    useNewUrlParser: true
    }),
    TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
