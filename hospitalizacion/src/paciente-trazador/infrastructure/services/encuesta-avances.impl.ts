import { BadRequestException } from '@nestjs/common';
import { BaseSource } from '@common/infrastructure/services';
import { PacTrazEncuestaOrm, PacTrazRespuestaOrm } from '../orm';
import { categoriaPreguntaTypeFactory } from '@hpn/paciente-trazador/domain/types';
import { RespuestaPacienteTrazadorRes } from '@hpn/paciente-trazador/application/responses';

export class AvancesEncuestaImpl extends BaseSource {
  async execute(
    pacienteId: number,
    ingresoId: number,
    addInfoAdicional: boolean
  ): Promise<RespuestaPacienteTrazadorRes[]> {
    try {
      const encuestaRp = this.conn.getRepository(PacTrazEncuestaOrm);
      const respuestaRp = this.conn.getRepository(PacTrazRespuestaOrm);

      const encuesta = await encuestaRp.findOne({ where: { pacienteId, ingresoId } });
      const respuestas = await respuestaRp.find({
        where: { encuestaId: encuesta.id },
        relations: ['pregunta'],
      });

      return respuestas.map(r => {
        let pregunta = undefined;
        if (addInfoAdicional) {
          const categoria = categoriaPreguntaTypeFactory(r.pregunta.categoriaCode);
          pregunta = { categoria: categoria.getForHumans(), descripcion: r.pregunta.descripcion };
        }

        const res: RespuestaPacienteTrazadorRes = {
          preguntaId: r.preguntaId,
          respuesta: r.respuesta,
          observacion: r.observacion,
          pregunta,
        };

        return res;
      });
    } catch (error: any) {
      throw new BadRequestException(error.message);
    }
  }
}
