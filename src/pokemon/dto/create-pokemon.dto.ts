/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreatePokemonDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  @MinLength(1)
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsInt()
  @IsPositive()
  @Min(1)
  readonly no: number;
}
