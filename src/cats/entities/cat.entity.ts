import { Column, Entity } from 'typeorm';

@Entity()
export class Cat {
  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  breed: string;
}
