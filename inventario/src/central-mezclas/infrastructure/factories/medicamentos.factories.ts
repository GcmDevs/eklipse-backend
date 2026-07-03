import { CtMzMedicamentoSeleccionRes } from '@inn/central-mezclas/application/responses';
import { MedicamentoOrm } from '@inn/orm/inn/central-mezclas';

export const dataToMedicamentoSeleccionRes = (
  data: MedicamentoOrm
): CtMzMedicamentoSeleccionRes => {
  return {
    id: data.id,
    nombre: data.nombre,
  };
};
