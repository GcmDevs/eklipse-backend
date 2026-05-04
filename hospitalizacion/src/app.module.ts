import { Module, OnModuleInit } from '@nestjs/common';
import { initializeSources } from '@common/infrastructure/services';
import { ENTITIES } from './app.entities';
import { PacientesModule } from './pacientes/module';
import { PacTrazModule } from './paciente-trazador/module';

@Module({
  imports: [
    // --- AVOID NOWRAP --- //
    PacientesModule,
    PacTrazModule,
  ],
})
export class AppModule implements OnModuleInit {
  public onModuleInit(): void {
    initializeSources(ENTITIES);
  }
}
