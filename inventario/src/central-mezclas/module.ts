import { Module } from '@nestjs/common';
import { SolicitudesController } from './presentation/controllers';
import { FetchSolicitudesImpl, CreateSolicitudImpl } from './infrastructure/services';

@Module({
  controllers: [SolicitudesController],
  providers: [FetchSolicitudesImpl, CreateSolicitudImpl],
})
export class CentralMezclasModule {}
