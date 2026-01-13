import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatsService {
  private readonly cats: {
    id: number;
    name: string;
    age: number;
    breed: string;
  }[] = [];

  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: Repository<Cat>,
  ) {}

  create(createCatDto: CreateCatDto) {
    const id = this.cats.length + 1;
    this.cats.push({
      id,
      ...createCatDto,
    });
  }

  async findAll() {
    return await this.catRepository.find();
  }

  async findOne(id: number) {
    return await this.catRepository.findOneBy({ id });
  }
}
