import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('article')
export class Article {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column('varchar', { length: 500, unique: true })
  title: string;

  @Column('varchar', { length: 500 })
  content: string;

  @Column('numeric') number: number;
}
