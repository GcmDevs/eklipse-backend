import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PacienteExternoOrm } from './paciente-externo.orm';
import { SRDUsuarioExternoOrm } from '@inn/orm/shared-bd';

@Entity('EKINNCTMZSOLI')
export class SolicitudOrm {
  @PrimaryGeneratedColumn({ name: 'OID' })
  id: number;

  @Column({ name: 'CONSECUTIVO' })
  consecutivo: number;

  @Column({ name: 'GENUSUEXT' })
  usuarioExternoId: number;

  @ManyToOne(() => SRDUsuarioExternoOrm)
  @JoinColumn({ name: 'GENUSUEXT', referencedColumnName: 'id' })
  usuarioExterno: SRDUsuarioExternoOrm;

  @Column({ name: 'EKINNCTMZPACEXT' })
  pacienteExternoId: number;

  @ManyToOne(() => PacienteExternoOrm, paciente => paciente.solicitudes)
  @JoinColumn({ name: 'EKINNCTMZPACEXT', referencedColumnName: 'id' })
  pacienteExterno: PacienteExternoOrm;

  @Column({ name: 'LINEA' })
  linea: number;

  @Column({ name: 'ESTADO' })
  estado: number;

  @Column({ name: 'PRIORIDAD' })
  prioridad: number;

  @Column({ name: 'FECHAPROGRAPLI', type: 'date' })
  fechaProgramacionAplicacion: Date;

  @Column({ name: 'FECHACREA' })
  fechaCreacion: Date;

  @Column({ name: 'GENUSUARIO1', nullable: true })
  usuarioResponsableId: number;

  @Column({ name: 'GENUSUOBS', length: 500, nullable: true })
  usuResObs: string;
}
