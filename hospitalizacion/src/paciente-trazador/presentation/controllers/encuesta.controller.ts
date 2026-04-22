import { RealizarEncuestaImpl } from '@hpn/paciente-trazador/infrastructure/services';
import { Body, Controller, Post } from '@nestjs/common';
import { RespuestaPacienteTrazadorDto } from '../dtos';
import { CommonGuards } from '@common/presentation/decorators';
import { ApiResponse } from '@nestjs/swagger';

@Controller('hpn/paciente-trazador')
@CommonGuards()
export class EncuestaController {
  constructor(private _realizarEncuesta: RealizarEncuestaImpl) {}

  @ApiResponse({ status: 201, description: 'Encuesta realizada exitosamente.' })
  @Post('encuesta')
  async realizarEncuesta(@Body() body: RespuestaPacienteTrazadorDto) {
    try {
      return await this._realizarEncuesta.execute(body);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
