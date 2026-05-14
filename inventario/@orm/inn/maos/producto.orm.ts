import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { LineaOrm } from './set-linea.orm';
import { ClasificacionOrm } from './set-clasificacion.orm';
import { SetOrm } from './set.orm';

@Entity('INNMOSPRODUC')
export class ProductoOrm {
  @PrimaryGeneratedColumn({ name: 'OID' })
  id: number;

  @Column({ name: 'CODIGO' })
  codigo: string;

  @Column({ name: 'NOMBRE' })
  nombre: string;

  @Column({ name: 'CANTIDAD' })
  cantidad: number;

  @Column({ name: 'INNMOSSETLINEA' })
  lineaId: number;

  @ManyToOne(() => LineaOrm, linea => linea.productos)
  @JoinColumn({ name: 'INNMOSSETLINEA' })
  linea: LineaOrm;

  @Column({ name: 'INNMOSSETCLASIFI' })
  clasificacionId: number;

  @ManyToOne(() => ClasificacionOrm, clasifi => clasifi.productos)
  @JoinColumn({ name: 'INNMOSSETCLASIFI' })
  clasificacion: ClasificacionOrm;

  @Column({ name: 'INNMOSSET' })
  setId: number;

  @ManyToOne(() => SetOrm, set => set.productos)
  @JoinColumn({ name: 'INNMOSSET' })
  set: SetOrm;
}
