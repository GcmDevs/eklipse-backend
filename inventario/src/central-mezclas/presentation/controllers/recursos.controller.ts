import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { CtMzTypesRes, CtMzPacienteRes } from '@inn/central-mezclas/application/responses';
import { FetchPacientesByPatternImpl } from '../../infrastructure/services';
import {
  ESTADOS_VALUES,
  LINEAS_VALUES,
  PRIORIDADES_VALUES,
  TIEMPOS_ADMIN_VALUES,
  UNIDADES_VALUES,
  VEHICULOS_VALUES,
  VIAS_ADMINISTRACION_VALUES,
} from '@inn/types/inn/central-mezclas';

@ApiTags('Recursos')
@Controller('v1/inn/central-mezclas/recursos')
export class RecursosController {
  constructor(private _fetchPacientesByPattern: FetchPacientesByPatternImpl) {}

  @ApiResponse({ status: 200, type: CtMzTypesRes, isArray: true })
  @Get('types')
  fetchTypes() {
    try {
      return [
        { estados: ESTADOS_VALUES },
        { lineas: LINEAS_VALUES },
        { prioridades: PRIORIDADES_VALUES },
        { tiemposAdministracion: TIEMPOS_ADMIN_VALUES },
        { unidades: UNIDADES_VALUES },
        { vehiculos: VEHICULOS_VALUES },
        { viasAdministracion: VIAS_ADMINISTRACION_VALUES },
      ];
    } catch (error: any) {
      throw new BadRequestException(error.message);
    }
  }

  @ApiResponse({ status: 200, type: CtMzPacienteRes, isArray: true })
  @Get('usuarios/:pattern')
  async fetchUsuariosByPattern(@Param('pattern') pattern: string) {
    try {
      return await this._fetchPacientesByPattern.execute(pattern);
    } catch (error: any) {
      throw new BadRequestException(error.message);
    }
  }
}
