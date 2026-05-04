import { ApiProperty } from '@nestjs/swagger';

export class PacTrazPreguntaRes {
  @ApiProperty()
  categoria: string;
  @ApiProperty()
  descripcion: string;
}
export class PacTrazRespuestaRes {
  @ApiProperty()
  preguntaId: number;
  @ApiProperty()
  respuesta: boolean;
  @ApiProperty()
  observacion: string;
  @ApiProperty({ type: () => PacTrazPreguntaRes, required: false })
  pregunta: PacTrazPreguntaRes;
}
