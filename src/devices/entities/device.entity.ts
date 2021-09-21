import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class Device {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne('Category')
  category: Category;

  @Column({ length: 16 })
  color: string;

  @Column()
  partNumber: number;
}
