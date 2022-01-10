import { Injectable } from '@nestjs/common';
import { FindAllTicketDto } from './dto';
import { ticketSchema } from './schema';

@Injectable()
export class TicketService {
  async findAll(params: FindAllTicketDto) {
    const a = await ticketSchema.query().find();
    return {
      count: 123,
      data: [],
    };
  }
}
