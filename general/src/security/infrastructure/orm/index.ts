import { EkCenterOrm } from './ek-center.orm';
import { LastAuthOrm } from './last-auth.orm';

export * from './ek-center.orm';
export * from './last-auth.orm';

export const ORM_SECURITY_ENTITIES = [EkCenterOrm, LastAuthOrm];
