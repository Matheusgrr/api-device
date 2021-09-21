import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { timeStamp } from 'console';
import { Repository, UpdateResult } from 'typeorm';
import { Category } from '../entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  getAll() {
    return this.categoryRepository.find();
  }
  getById(id: number): Promise<Category> {
    return this.categoryRepository.findOne({ id });
  }

  createCategory(newCategory: Category) {
    return this.categoryRepository.save(newCategory);
  }

  updateCategory(category: Category) {
    return this.categoryRepository.update(category.id, category);
  }

  deleteCategory(id: number) {
    return this.categoryRepository.delete(id);
  }
}
