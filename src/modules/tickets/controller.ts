import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { CountInterceptor } from '@/common/interceptor/response';
import { FindAllTicketDto } from './dto';
import { TicketService } from './service';

@Controller('tickets')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Get()
  @UseInterceptors(CountInterceptor)
  findAll(
    @Query()
    query: FindAllTicketDto,
  ) {
    return this.ticketService.findAll(query);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.ticketService.findOne(+id);
  // }

  // @Post()
  // create(@Body() createCatDto: CreateCatDto) {
  //   return this.ticketService.create(createCatDto);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
  //   return this.ticketService.update(+id, updateCatDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.ticketService.remove(+id);
  // }
}
