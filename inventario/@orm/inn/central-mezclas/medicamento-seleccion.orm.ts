import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { MedicamentoOrm } from './medicamento.orm';

@Entity('EKINNCTMZMEDSEL')
export class MedicamentoSeleccionOrm {
  @PrimaryGeneratedColumn({ name: 'OID' })
  id: number;

  @Column({ name: 'EKINNCTMZMED' })
  medicamentoId: number;

  @ManyToOne(() => MedicamentoOrm, medicamento => medicamento.selecciones)
  @JoinColumn({ name: 'EKINNCTMZMED', referencedColumnName: 'id' })
  medicamento: MedicamentoOrm;

  @Column({ name: 'UNIDAD' })
  unidad: number;

  @Column({ name: 'VEHICULO' })
  vehiculo: number;

  @Column({ name: 'CONCENTRACION', length: 20 })
  concentracion: string;

  @Column({ name: 'VOLUMEN', type: 'decimal', precision: 7, scale: 2 })
  volumen: number;

  @Column({ name: 'CANTIDAD', type: 'decimal', precision: 7, scale: 2 })
  cantidad: number;

  @Column({ name: 'TIEMPOADMIN' })
  tiempoAdministracion: number;

  @Column({ name: 'UNIDMEDTIEM' })
  uniMedTiempoAdmin: number;
}
