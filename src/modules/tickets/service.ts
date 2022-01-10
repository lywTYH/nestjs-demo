import { Injectable } from '@nestjs/common';
import { FindAllQuery } from './dto';

@Injectable()
export class TicketService {
  findAll(params: FindAllQuery) {
    return {
      count: 123,
      data: [],
    };
  }
}
