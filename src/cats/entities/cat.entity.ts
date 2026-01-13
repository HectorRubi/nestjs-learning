import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { BaseEntity } from '../../entities/base.entity';
// import { Timestamp } from '../../entities/timestamp.entity';

@Entity()
export class Cat extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  breed: string;

  // @Column(() => Timestamp)
  // timestamp: Timestamp;
}
