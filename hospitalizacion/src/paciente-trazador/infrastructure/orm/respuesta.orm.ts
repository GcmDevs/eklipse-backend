import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from 'typeorm';
import { PacTrazPreguntaOrm } from './pregunta.orm';

@Entity({ name: 'EKINNPACTRAZENCRESPUES' })
export class PacTrazRespuestaOrm {
  @PrimaryGeneratedColumn({ name: 'OID' })
  id: number;

  @Column({ name: 'EKINNPACTRAZENCPREGUN' })
  preguntaId: number;

  @OneToOne(() => PacTrazPreguntaOrm)
  @JoinColumn({ name: 'EKINNPACTRAZENCPREGUN', referencedColumnName: 'id' })
  pregunta: PacTrazPreguntaOrm;

  @Column({ name: 'RESBOOLEAN' })
  respuesta: boolean;

  @Column({ name: 'OBSERVACION' })
  observacion: string;
}
