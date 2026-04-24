import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { CommonGuards } from '@common/presentation/decorators';
import {
  AvancesEncuestaImpl,
  RealizarEncuestaImpl,
} from '@hpn/paciente-trazador/infrastructure/services';
import { RespuestaPacienteTrazadorDto } from '../dtos';
import { RespuestaPacienteTrazadorRes } from '@hpn/paciente-trazador/application/responses';

@Controller('v1/hpn/paciente-trazador')
@CommonGuards()
export class EncuestaController {
  constructor(
    private _realizarEncuesta: RealizarEncuestaImpl,
    private _avancesEncuesta: AvancesEncuestaImpl
  ) {}

  @ApiOperation({ summary: 'Registra las respuestas dee la encuesta uno por uno.' })
  @ApiResponse({ status: 201, description: 'Respuesta almacenada exitosamente.' })
  @Post('encuesta/one-by-one')
  async realizarEncuesta(@Body() body: RespuestaPacienteTrazadorDto) {
    try {
      return await this._realizarEncuesta.execute(body);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  @ApiOperation({ summary: 'Devuelve los valores respondidos en la encuesta.' })
  @ApiResponse({ status: 200, isArray: true, type: RespuestaPacienteTrazadorRes })
  @ApiQuery({ name: 'addInfoAdicional', required: false })
  @Get('encuesta/avances/:pacienteId/:ingresoId')
  async avancesEncuesta(
    @Param('pacienteId') pacienteId: number,
    @Param('ingresoId') ingresoId: number,
    @Query('addInfoAdicional') addInfoAdicional: boolean
  ): Promise<RespuestaPacienteTrazadorRes[]> {
    try {
      return await this._avancesEncuesta.execute(+pacienteId, +ingresoId, addInfoAdicional);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
