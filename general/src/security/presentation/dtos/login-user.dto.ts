import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { GcmContexts } from '@common/domain/types';
import { castDataServices } from '@common/application/services';

export class LoginUserDto {
  @IsNotEmpty()
  @IsEnum(GcmContexts, { message: `${castDataServices.enumToString(GcmContexts)}` })
  context: GcmContexts;

  @IsString()
  username: string;

  @IsString()
  password: string;
}
