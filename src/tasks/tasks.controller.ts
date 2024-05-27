import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { HttpErrorByCode } from "@nestjs/common/utils/http-error-by-code.util";
import { ValidadorPipePipe } from "./pipes/validador-pipe/validador-pipe.pipe";


@Controller({})
export class TasksController{

    
   constructor(private tasksService: TasksService){ }


   
   @Get("/")
   @HttpCode(201) //devuelvo este ocdigo de estado
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
    postTask(@Body() body_from_fetch: CreateTaskDto /*Digo el tipo de dato que estoy recibiendo y lo que voy a recibir*/ ){

        console.log("1:13:06")
        
        return this.tasksService.createTask(body_from_fetch)

    }


    @Delete("/tasks")
    deleteTasks(){

        return "Borrando"

    }

    @Get("/add/:num")
    addNumber(@Param("num", ParseIntPipe) /*Convierto en entero el valor que viene desde el param */ num: number){

        return num+10
     
    }

    @Get("processUser")
    processUser(@Query(ValidadorPipePipe) queryPersonalizated: {name: string, age: number}){


        return "asd: "+queryPersonalizated.name+" "+queryPersonalizated.age
    }

}