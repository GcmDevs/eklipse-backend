import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'EKINNPACTRAZENCUESTA' })
export class PacTrazEncuestaOrm {
  @PrimaryGeneratedColumn({ name: 'OID' })
  id: number;

  @Column({ name: 'GENPACIEN' })
  pacienteId: number;

  @Column({ name: 'ADNINGRESO' })
  ingresoId: number;

  @Column({ name: 'GENUSUARIO' })
  usuarioId: number;

  @Column({ name: 'FECHACREACION' })
  fechaCreacion: Date;

  @Column({ name: 'OBSERVACION', nullable: true })
  observacion: string;
}
