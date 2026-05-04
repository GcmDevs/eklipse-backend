import { ORM_ADN_ENTITIES } from '@orm/adn';
import { ORM_GEN_ENTITIES } from '@orm/gen';
import { ORM_HPN_ENTITIES } from '@orm/hpn';
import { ORM_PACIENTE_TRAZADOR } from './paciente-trazador/infrastructure/orm';

export const ENTITIES = [
  // --- AVOID NOWRAP --- //
  ...ORM_ADN_ENTITIES,
  ...ORM_GEN_ENTITIES,
  ...ORM_HPN_ENTITIES,
  ...ORM_PACIENTE_TRAZADOR,
];
