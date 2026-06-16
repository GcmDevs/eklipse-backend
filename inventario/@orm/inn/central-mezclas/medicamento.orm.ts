import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MedicamentoSeleccionOrm } from './medicamento-seleccion.orm';

@Entity('EKINNCTMZMED')
export class MedicamentoOrm {
  @PrimaryGeneratedColumn({ name: 'OID' })
  id: number;

  @Column({ name: 'NOMBRE', length: 100 })
  nombre: string;

  @OneToMany(() => MedicamentoSeleccionOrm, (seleccion) => seleccion.medicamento)
  selecciones: MedicamentoSeleccionOrm[];
}
