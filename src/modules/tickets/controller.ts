import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { CountInterceptor } from '@/common/interceptor/response';

import { FindAllQuery } from './dto';
import { TicketService } from './service';

@UseInterceptors(CountInterceptor)
@Controller('tickets')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}
  @Get()
  findAll(
    @Query()
    query: FindAllQuery,
  ) {
    return this.ticketService.findAll(query);
  }
}
