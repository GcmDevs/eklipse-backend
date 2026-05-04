import { Module, OnModuleInit } from '@nestjs/common';
import { FetchPacientesHospitalizadosImpl } from './infrastructure/services';
import { RecursosController } from './presentation/controllers';

@Module({
  controllers: [RecursosController],
  providers: [FetchPacientesHospitalizadosImpl],
})
export class PacientesModule {}
