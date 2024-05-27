import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TasksMiddleware } from 'src/middlewares/tasks/tasks.middleware';

@Module({
    controllers: [TasksController],
    providers: [TasksService]
})

export class TasksModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(TasksMiddleware).forRoutes("tasks")
    }
}