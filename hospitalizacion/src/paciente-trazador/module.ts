import { Module } from '@nestjs/common';
import { AvancesEncuestaImpl, RealizarEncuestaImpl } from './infrastructure/services';
import { EncuestaController } from './presentation/controllers';

@Module({
  controllers: [EncuestaController],
  providers: [RealizarEncuestaImpl, AvancesEncuestaImpl],
})
export class PacTrazModule {}
