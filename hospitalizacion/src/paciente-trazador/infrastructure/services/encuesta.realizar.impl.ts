import { BadRequestException } from '@nestjs/common';
import { BaseSource } from '@common/infrastructure/services';
import { RespuestaPacienteTrazadorDto } from '@hpn/paciente-trazador/presentation/dtos';
import { PacTrazEncuestaOrm, PacTrazPreguntaOrm, PacTrazRespuestaOrm } from '../orm';

export class RealizarEncuestaImpl extends BaseSource {
  async execute(body: RespuestaPacienteTrazadorDto): Promise<boolean> {
    try {
      await this.qr.connect();
      await this.qr.startTransaction();

      const encuestaRp = this.qr.manager.getRepository(PacTrazEncuestaOrm);
      const preguntaRp = this.qr.manager.getRepository(PacTrazPreguntaOrm);
      const respuestaRp = this.qr.manager.getRepository(PacTrazRespuestaOrm);

      let respuesta: PacTrazRespuestaOrm;
      let encuesta: PacTrazEncuestaOrm;

      encuesta = await encuestaRp.findOne({
        where: { pacienteId: body.pacienteId, ingresoId: body.ingresoId },
      });

      if (!encuesta) {
        encuesta = new PacTrazEncuestaOrm();
        encuesta.pacienteId = body.pacienteId;
        encuesta.ingresoId = body.ingresoId;
        encuesta.usuarioId = this.auth.id;
        encuesta.fechaCreacion = new Date();
        encuesta.observacion = body.observacionEncuesta || null;
      }

      encuesta.fechaActualizacion = new Date();
      encuesta = await encuestaRp.save(encuesta);

      const pregunta = await preguntaRp.findOne({ where: { id: body.preguntaId } });
      if (!pregunta) throw new Error('Pregunta no encontrada');

      respuesta = await respuestaRp.findOne({
        where: { preguntaId: body.preguntaId, encuestaId: encuesta.id },
      });

      if (!respuesta) {
        respuesta = new PacTrazRespuestaOrm();
        respuesta.preguntaId = body.preguntaId;
      }
      respuesta.encuestaId = encuesta.id;
      respuesta.respuesta = body.respuesta;
      respuesta.observacion = body.observacionPregunta || null;
      respuesta = await respuestaRp.save(respuesta);

      await this.qr.commitTransaction();
      return true;
    } catch (error: any) {
      await this.qr.rollbackTransaction();
      throw new BadRequestException(error.message);
    } finally {
      await this.qr.release();
    }
  }
}
