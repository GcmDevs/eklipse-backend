import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { LineaOrm } from './set-linea.orm';
import { ClasificacionOrm } from './set-clasificacion.orm';
import { ProductoOrm } from './producto.orm';

@Entity('INNMOSSET')
export class SetOrm {
  @PrimaryGeneratedColumn({ name: 'OID' })
  id: number;

  @Column({ name: 'NOMBRE' })
  nombre: string;

  @Column({ name: 'INNMOSSETLINEA' })
  lineaId: number;

  @ManyToOne(() => LineaOrm, linea => linea.sets)
  @JoinColumn({ name: 'INNMOSSETLINEA' })
  linea: LineaOrm;

  @Column({ name: 'INNMOSSETCLASIFI' })
  clasificacionId: number;

  @ManyToOne(() => ClasificacionOrm, clasifi => clasifi.sets)
  @JoinColumn({ name: 'INNMOSSETCLASIFI' })
  clasificacion: ClasificacionOrm;

  @Column({ name: 'ACTIVO' })
  activo: boolean;

  @OneToMany(() => ProductoOrm, produc => produc.set)
  productos: ProductoOrm[];
}
