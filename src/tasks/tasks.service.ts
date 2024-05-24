import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";

export interface User{
    name: string;
    age: number;
}

@Injectable()
export class TasksService{


    //genero una vriable en la clase, aunque mas bien es una propiedad privada
    private tasks = []

    getTasks(): any /*Indicas el tipo de dato que vas a retornar*/{
        return this.tasks
    }

    hello(): object{
        return{
            "hola":"mundo"
        }
    }

    getSpecificTask(id: string): any {
        
    
        console.log("looking in tasks from service this specific id:", id);
    
        for (let i = 0; i < this.tasks.length; i++) {
            console.log(this.tasks[i].id)
            if (this.tasks[i].id == id){ return this.tasks[i];}
        }
    
        return new NotFoundException("ningun id dentro de la lista coincide con el buscado")
    }
    

    createTask(task: CreateTaskDto){

        this.tasks.push({
            id: this.tasks.length+1,
            ...task
        })

        console.log(task)
        return {
            "tarea añadida":task
        }
    }



}