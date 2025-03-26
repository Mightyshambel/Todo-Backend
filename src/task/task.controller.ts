import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import mongoose from 'mongoose';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    console.log(createTaskDto);
    return this.taskService.createTask(createTaskDto);
  }

  @Get()
  getTasks() {
    return this.taskService.getTasks();
  }
  //get the single task by id
  @Get(':id')
  async getTaskById(@Param('id') id: string) {
    const findTask = await this.taskService.getTaskById(id);
    if (!findTask) throw new HttpException('task not found', 404);
    return findTask;
  }

  @Patch(':id')
  async updateTask(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('invalid Id', 400);
    const updateTask = await this.taskService.updateTask(id, updateTaskDto);
    console.log(updateTask);
    if (!updateTask) throw new HttpException('Task Not Found', 404);
    return updateTask;
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('invalid Id', 400);
    const deleteTask = await this.taskService.deleteTask(id);
    console.log(deleteTask);
    if (!deleteTask) throw new HttpException('Task Not Found', 404);
    return deleteTask;
  }
}
