import { CategoriaPreguntaCode } from '@hpn/paciente-trazador/domain/types';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'EKINNPACTRAZENCPREGUN' })
export class PacTrazPreguntaOrm {
  @PrimaryGeneratedColumn({ name: 'OID' })
  id: number;

  @Column({ name: 'CATEGORIA' })
  categoriaCode: CategoriaPreguntaCode;

  @Column({ name: 'ENUMERADO' })
  enumerado: number;

  @Column({ name: 'DESCRIPCION' })
  descripcion: string;
}
