import { Module } from "@nestjs/common";
import { TicketModuleBase } from "./base/ticket.module.base";
import { TicketService } from "./ticket.service";
import { TicketController } from "./ticket.controller";

@Module({
  imports: [TicketModuleBase],
  controllers: [TicketController],
  providers: [TicketService],
  exports: [TicketService],
})
export class TicketModule {}
