import { SRDUsuarioExternoOrm } from './usuario-externo.orm';
import { SRDCentroOrm } from './centro.orm';

export * from './usuario-externo.orm';
export * from './centro.orm';

export const ORM_SHARED_ENTITIES = [
  // --- AVOID NOWRAP --- //
  SRDUsuarioExternoOrm,
  SRDCentroOrm,
];
