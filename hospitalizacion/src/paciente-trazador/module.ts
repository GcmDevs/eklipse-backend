import { Module } from '@nestjs/common';
import { RealizarEncuestaImpl } from './infrastructure/services';
import { EncuestaController } from './presentation/controllers';

@Module({
  controllers: [EncuestaController],
  providers: [RealizarEncuestaImpl],
})
export class PacTrazModule {}
