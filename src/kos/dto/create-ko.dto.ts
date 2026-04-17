import { Transform } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { $Enums } from 'generated/prisma/browser';

export class CreateKoDto {

    @IsString()
    @IsNotEmpty()
    name!: string;


    @IsString()
    @IsNotEmpty()
    address!: string;

    @Transform(({ value }) => Number(value))
    @IsNumber()
    @IsNotEmpty()
    price_per_month!: number;


    @IsEnum($Enums.Gender)
    @IsNotEmpty()
    gender!: $Enums.Gender;

    @IsString()
    @IsOptional()
    description!: string;

    @IsNotEmpty()
    fasility!: string[];
}
