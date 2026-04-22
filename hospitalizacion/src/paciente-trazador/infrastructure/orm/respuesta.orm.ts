import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from 'typeorm';
import { PacTrazPreguntaOrm } from './pregunta.orm';
import { PacTrazEncuestaOrm } from './encuesta.orm';

@Entity({ name: 'EKINNPACTRAZENCRESPUES' })
export class PacTrazRespuestaOrm {
  @PrimaryGeneratedColumn({ name: 'OID' })
  id: number;

  @Column({ name: 'EKINNPACTRAZENCUESTA' })
  encuestaId: number;

  @OneToOne(() => PacTrazEncuestaOrm)
  @JoinColumn({ name: 'EKINNPACTRAZENCUESTA', referencedColumnName: 'id' })
  encuesta: PacTrazEncuestaOrm;

  @Column({ name: 'EKINNPACTRAZENCPREGUN' })
  preguntaId: number;

  @OneToOne(() => PacTrazPreguntaOrm)
  @JoinColumn({ name: 'EKINNPACTRAZENCPREGUN', referencedColumnName: 'id' })
  pregunta: PacTrazPreguntaOrm;

  @Column({ name: 'RESBOOLEAN' })
  respuesta: boolean;

  @Column({ name: 'OBSERVACION', nullable: true })
  observacion: string;
}
