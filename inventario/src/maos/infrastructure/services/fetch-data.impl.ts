import { BaseSource } from '@common/infrastructure/services';
import {
  ClasificacionOrm,
  LineaOrm,
  OfertaOrm,
  ProductoOrm,
  ProveedorOrm,
  SetOrm,
} from '@inn/orm/inn/maos';
import { Injectable } from '@nestjs/common';
import { dataToLineaRes } from '../factories';

@Injectable()
export class FetchDataImpl extends BaseSource {
  async execute(): Promise<any> {
    const lineaRp = this.ekConn.getRepository(LineaOrm);
    const ofertaRp = this.conn.getRepository(OfertaOrm);
    const proveedorRp = this.conn.getRepository(ProveedorOrm);

    const lineas = await lineaRp.find({
      relations: ['clasificaciones', 'clasificaciones.sets', 'clasificaciones.sets.productos'],
    });

    const ofertas = await ofertaRp.find({
      relations: ['detalle'],
    });

    const proveedores = await proveedorRp.find({ where: { maos: true } });

    ofertas.map(o => {
      o.proveedor = proveedores.find(p => p.id === o.proveedorId);
    });

    return lineas.map(l => dataToLineaRes(l, ofertas));
  }
}
