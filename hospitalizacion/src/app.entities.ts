import { ORM_ADN_ENTITIES } from '@orm/adn';
import { ORM_GEN_ENTITIES } from '@orm/gen';
import { ORM_HPN_ENTITIES } from '@orm/hpn';

export const ENTITIES = [
  // --- AVOID NOWRAP --- //
  ...ORM_ADN_ENTITIES,
  ...ORM_GEN_ENTITIES,
  ...ORM_HPN_ENTITIES,
];
