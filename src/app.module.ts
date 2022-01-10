import { Module } from '@nestjs/common';

import { LeanCloudModule } from './leancloud';
import { TicketModule } from './modules/tickets';

@Module({
  imports: [LeanCloudModule, TicketModule],
})
export class AppModule {}
