import { CtmType } from '@common/domain/types';

export type ViaAdminReempTabCode = 1 | 2 | 3;

export class ViaAdminReempTabType extends CtmType<ViaAdminReempTabCode> {}

const ORAL = new ViaAdminReempTabType(1, 'ORAL');
const SUBLINGUAL = new ViaAdminReempTabType(2, 'SUBLINGUAL');
const VAGINAL = new ViaAdminReempTabType(3, 'VAGINAL');

export function viaAdminReempTabTypeFactory(code: ViaAdminReempTabCode): ViaAdminReempTabType {
  switch (code) {
    case 1:
      return ORAL;
    case 2:
      return SUBLINGUAL;
    case 3:
      return VAGINAL;
  }
}

export const VIAS_ADMIN_REEMP_TAB_VALUES = [ORAL, SUBLINGUAL, VAGINAL];

export const VIAS_ADMIN_REEMP_TAB = { ORAL, SUBLINGUAL, VAGINAL };
