import { Module, OnModuleInit } from '@nestjs/common';
import { initializeSources } from '@common/infrastructure/services';
import { ENTITIES } from './app.entities';
import { PacTrazModule } from './paciente-trazador/module';

@Module({
  imports: [
    // --- AVOID NOWRAP --- //
    PacTrazModule,
  ],
})
export class AppModule implements OnModuleInit {
  public onModuleInit(): void {
    initializeSources(ENTITIES);
  }
}
