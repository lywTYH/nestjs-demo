import { Module } from '@nestjs/common';

import { LeanCloudModule } from './leancloud';
import { TicketModule } from './modules/tickets';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [LeanCloudModule, TicketModule, CatsModule],
  controllers: [CatsController],
  providers: [],
})
export class AppModule {}
