import { PartialType } from '@nestjs/mapped-types';
import { CreateKoDto } from './create-ko.dto';
import { IsString, IsNotEmpty, IsNumber, IsEnum, IsOptional } from 'class-validator';
import { $Enums } from 'generated/prisma/browser';
import { Transform } from 'class-transformer';

export class UpdateKoDto extends PartialType(CreateKoDto) {
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
    
