import { Module } from '@nestjs/common';
import {
  AuthoritiesController,
  SubModulesController,
  ResourcesController,
  ModulesController,
  AuthController,
} from './presentation/controllers';
import {
  AuthoritiesServicesImpl,
  AuthoritiesCrudImpl,
  SubModulesCrudImpl,
  ModulesCrudImpl,
  LoginUserImpl,
  ResourcesImpl,
} from './infrastructure/services';

@Module({
  controllers: [
    AuthController,
    ResourcesController,
    ModulesController,
    SubModulesController,
    AuthoritiesController,
  ],
  providers: [
    AuthoritiesServicesImpl,
    AuthoritiesCrudImpl,
    SubModulesCrudImpl,
    ModulesCrudImpl,
    ResourcesImpl,
    LoginUserImpl,
  ],
})
export class SecurityModule {}
