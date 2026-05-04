import { Module } from '@nestjs/common';
import {
  PacTrazAvancesEncuestaImpl,
  FetchPacientesHospitalizadosImpl,
  PacTrazRealizarEncuestaImpl,
} from './infrastructure/services';
import { EncuestaController, RecursosController } from './presentation/controllers';

@Module({
  controllers: [RecursosController, EncuestaController],
  providers: [
    FetchPacientesHospitalizadosImpl,
    PacTrazAvancesEncuestaImpl,
    PacTrazRealizarEncuestaImpl,
  ],
})
export class PacientesModule {}
