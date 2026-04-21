import { PacTrazEncuestaOrm } from './encuesta.orm';
import { PacTrazPreguntaOrm } from './pregunta.orm';
import { PacTrazRespuestaOrm } from './respuesta.orm';

export * from './encuesta.orm';
export * from './pregunta.orm';
export * from './respuesta.orm';

export const ORM_PACIENTE_TRAZADOR = [
  // --- AVOID NOWRAP --- //
  PacTrazEncuestaOrm,
  PacTrazPreguntaOrm,
  PacTrazRespuestaOrm,
];
