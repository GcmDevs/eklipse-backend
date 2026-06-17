import { Get, Controller, Query } from '@nestjs/common';
import { FetchSolicitudesImpl } from '../../infrastructure/services';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CtMzSolicitudRes } from '@inn/central-mezclas/application/responses';

@ApiTags('Central de mezclas')
@Controller('v1/inn/central-mezclas')
export class CentralMezclasController {
  constructor(private _fetchSolicitudes: FetchSolicitudesImpl) {}

  @ApiResponse({ status: 200, type: CtMzSolicitudRes, isArray: true })
  @Get()
  fetch(@Query('fechaInicio') fechaInicio: Date, @Query('fechaFin') fechaFin: Date) {
    try {
      fechaInicio = new Date(`${fechaInicio}:00:00:00`);
      fechaFin = new Date(`${fechaFin}:23:59:59`);
      return this._fetchSolicitudes.execute(fechaInicio, fechaFin);
    } catch (error) {
      return error.message;
    }
  }
}
