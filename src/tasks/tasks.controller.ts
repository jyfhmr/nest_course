import { Body, Controller, Delete, Get, Param, Post, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";


@Controller({})
export class TasksController{

    
   constructor(private tasksService: TasksService){ }


   
   @Get("/")
   hello(){

       return this.tasksService.hello()

   }

   //obtengo los queries
    @Get("/tasks")
    getAllTasks(@Query() query_from_url: any){

        console.log(query_from_url)
        return this.tasksService.getTasks()

    }

    //obtengo los params
    @Get("/tasks/:id")
    getTask(@Param() id: string){

   
        console.log("el param:",id)

        const idFromParam = id["id"]
        console.log(idFromParam)

        return this.tasksService.getSpecificTask(idFromParam)

    }

    //obtengo el body
    @Post("/tasks")
    @UsePipes(new ValidationPipe())
    postTask(@Body() body_from_fetch: CreateTaskDto  /*Digo el tipo de dato que estoy recibiendo y lo que voy a recibir*/ ){

        
        return this.tasksService.createTask(body_from_fetch)

    }


    @Delete("/tasks")
    deleteTasks(){

        return "Borrando"

    }

}