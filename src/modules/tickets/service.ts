import { Injectable } from '@nestjs/common';
import { LeancloudSchema } from '@/leancloud';
import { FindAllTicketDto } from './dto';

const ticketSchema = new LeancloudSchema('ticket');

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
