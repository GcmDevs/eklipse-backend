import { ApiProperty } from '@nestjs/swagger';

export class PreguntaPacienteTrazadorRes {
  @ApiProperty()
  categoria: string;
  @ApiProperty()
  descripcion: string;
}
export class RespuestaPacienteTrazadorRes {
  @ApiProperty()
  preguntaId: number;
  @ApiProperty()
  respuesta: boolean;
  @ApiProperty()
  observacion: string;
  @ApiProperty({ type: () => PreguntaPacienteTrazadorRes, required: false })
  pregunta: PreguntaPacienteTrazadorRes;
}
