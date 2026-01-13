import { Column, Entity } from 'typeorm';

import { BaseEntity } from '../../entities/base.entity';

@Entity()
export class Cat extends BaseEntity {
  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  breed: string;
}
