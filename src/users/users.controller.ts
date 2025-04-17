import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}

    @Get()
    findAll(){
        return this.usersService.findAll()
    }

    @Post()
    create(@Body()data:{name:string,email:string, password:string}){
        return this.usersService.create(data)
    }

    @Get(":id")
    findOne(@Param('id')id:string){
        return this.usersService.findOne(id)
    }

    @Put(":id")
    update(@Param('id')id:string , @Body()data:{name:string,email:string}){
        return this.usersService.update(id,data)
    }
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.usersService.delete(id);
    }
  }