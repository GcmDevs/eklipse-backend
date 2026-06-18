import { CtmTypeRes } from '@common/domain/types';
import { ApiProperty } from '@nestjs/swagger';

export class CtMzUsuarioExternoRes {
  @ApiProperty()
  documento: string;

  @ApiProperty()
  nombreCompleto: string;
}

export class CtMzUsuarioResponsableRes {
  @ApiProperty()
  documento: string;

  @ApiProperty()
  nombreCompleto: string;

  @ApiProperty()
  observacion: string;
}

export class CtMzPacienteExternoRes {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nombreCompleto: string;

  @ApiProperty()
  numeroDocumento: string;

  @ApiProperty()
  fechaNacimiento: Date;

  @ApiProperty()
  cama: string;
}

export class CtMzSeleccionRes {
  @ApiProperty()
  nombre: string;

  @ApiProperty({ type: CtmTypeRes })
  linea: CtmTypeRes;

  @ApiProperty({ type: CtmTypeRes })
  unidad: CtmTypeRes;

  @ApiProperty({ type: CtmTypeRes })
  vehiculo: CtmTypeRes;

  @ApiProperty()
  concentracion: string;

  @ApiProperty()
  volumen: number;

  @ApiProperty()
  cantidad: number;

  @ApiProperty()
  tiempoAdmin: number;

  @ApiProperty({ type: CtmTypeRes })
  uniMedTiempoAdmin: CtmTypeRes;

  @ApiProperty()
  fechaAplicacion: Date;

  @ApiProperty({ type: CtmTypeRes })
  viaAdministracion: CtmTypeRes;
}

export class CtMzSolicitudRes {
  @ApiProperty()
  id: number;

  @ApiProperty()
  fechaCreacion: Date;

  @ApiProperty({ type: CtmTypeRes })
  linea: CtmTypeRes;

  @ApiProperty({ type: CtmTypeRes })
  estado: CtmTypeRes;

  @ApiProperty({ type: CtmTypeRes })
  prioridad: CtmTypeRes;

  @ApiProperty({ type: CtMzUsuarioExternoRes })
  usuarioExterno: CtMzUsuarioExternoRes;

  @ApiProperty({ type: CtMzUsuarioResponsableRes })
  usuarioResponsable: CtMzUsuarioResponsableRes;

  @ApiProperty({ type: CtMzPacienteExternoRes })
  pacienteExterno: CtMzPacienteExternoRes;

  @ApiProperty({ type: CtMzSeleccionRes, isArray: true })
  seleccion: CtMzSeleccionRes[];
}

export class CtMzTypesRes {
  @ApiProperty({ type: CtmTypeRes, isArray: true })
  estados: CtmTypeRes[];
  @ApiProperty({ type: CtmTypeRes, isArray: true })
  lineas: CtmTypeRes[];
  @ApiProperty({ type: CtmTypeRes, isArray: true })
  prioridades: CtmTypeRes[];
  @ApiProperty({ type: CtmTypeRes, isArray: true })
  tiemposAdministracion: CtmTypeRes[];
  @ApiProperty({ type: CtmTypeRes, isArray: true })
  unidades: CtmTypeRes[];
  @ApiProperty({ type: CtmTypeRes, isArray: true })
  vehiculos: CtmTypeRes[];
  @ApiProperty({ type: CtmTypeRes, isArray: true })
  viasAdministracion: CtmTypeRes[];
}
