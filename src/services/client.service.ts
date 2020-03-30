import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from '../entities';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client) private clientRepository: Repository<any>,
  ) {}
  public async addPost(post): Promise<Client> {
    return await this.clientRepository.save(post);
  }

  public async getPosts(id): Promise<Client[]> {
    return await this.clientRepository.find({
      where: {
        userId: id
      }
    });
  }

  public async deletePost(id) {
    return await this.clientRepository.delete(id);
  }

}