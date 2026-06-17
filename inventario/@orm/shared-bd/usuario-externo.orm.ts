import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('GENUSUEXT')
export class SRDUsuarioExternoOrm {
  @PrimaryGeneratedColumn({ name: 'OID' })
  id: number;

  @Column({ name: 'DOCUMENTO' })
  numeroDocumento: string;

  @Column({ name: 'NOMBRECOMPLETO' })
  nombreCompleto: string;

  @Column({ name: 'PASSWORD', select: false })
  password: string;
}
