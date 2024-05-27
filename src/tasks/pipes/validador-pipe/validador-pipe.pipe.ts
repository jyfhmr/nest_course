import { ArgumentMetadata, HttpException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidadorPipePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {

    console.log("values from pipe",value)

    parseInt(value.age)

   if(isNaN(value.age)){
    throw new HttpException("Age not a numero webon",400) //400 es para mala peticion, 500 es para internal server error
   }


    return value;
  }
}
