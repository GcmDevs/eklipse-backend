import { Module } from '@nestjs/common';
import { CentralMezclasController } from './presentation/controllers';
import { FetchSolicitudesImpl } from './infrastructure/services';

@Module({
  controllers: [CentralMezclasController],
  providers: [FetchSolicitudesImpl],
})
export class CentralMezclasModule {}
