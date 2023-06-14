import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './models/user.entity';
import { DeepPartial, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(entity: DeepPartial<User>): Promise<boolean> {
    const res = await this.userRepository.insert(entity);
    console.log(`res:`, res);
    if (res?.raw?.affectedRows > 0) {
         return true;
    }
    return false;
  }

  async delete(id: string): Promise<boolean>{
    const res = await this.userRepository.delete(id);
    if (res?.affected > 0) {
        return true;
   }
   return false;
  }

  async update(){

  }

  async find(id: string): Promise<User> {
    const res = await this.userRepository.findOneBy({ id });
    return res;
  }
}
