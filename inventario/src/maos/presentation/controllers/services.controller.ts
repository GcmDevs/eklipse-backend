import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { FetchDataImpl } from '../../infrastructure/services';

@Controller('v1/inn/maos')
export class MAOSServicesController {
  constructor(private _fetchData: FetchDataImpl) {}

  @Get('fetch-data')
  fetchData() {
    try {
      return this._fetchData.execute();
    } catch (error) {
      return error.message;
    }
  }
}
