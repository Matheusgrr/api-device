import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from '../entities/category.entity';
import { UpdateDateColumn, UpdateResult } from 'typeorm';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  async getAll(): Promise<Category[]> {
    return this.categoryService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<Category> {
    return this.categoryService.getById(id);
  }

  @Post()
  async createCategory(@Body() category: Category): Promise<Category> {
    return this.categoryService.createCategory(category);
  }

  @Put(':id')
  async updateCategory(
    @Param('id') id: number,
    @Body() category: Category,
  ): Promise<UpdateResult> {
    return this.categoryService.updateCategory(category);
  }

  @Delete(':id')
  async deleCategory(@Param('id') id: number) {
    return this.categoryService.deleteCategory(id);
  }
}
