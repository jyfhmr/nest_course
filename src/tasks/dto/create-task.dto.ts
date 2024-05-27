import { IsBoolean, IsNotEmpty, IsNumber, IsString, Max, MinLength, isNumber } from "class-validator"

export class CreateTaskDto{

    @IsString()
    @MinLength(1)
    title: string


    @IsNotEmpty()
    @IsBoolean()
    status: boolean


    @IsNumber()
    @Max(500)
    number: number
}