import { PartialType } from '@nestjs/swagger';
import { CreateBookDto } from './create-book.dto';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsEnum, IsDate, IsOptional } from 'class-validator';
import { $Enums } from 'generated/prisma/browser';

export class UpdateBookDto extends PartialType(CreateBookDto) {
     @IsNotEmpty()
      @IsNumber()
      kos_id!: number;
      
      @IsNotEmpty()
      @IsNumber()
      user_id!: number;
    
      @IsNotEmpty()
      @IsEnum($Enums.Status)
      status!: $Enums.Status;
    
      @Type(() => Date)
      @IsNotEmpty()
      @IsDate()
      start_date!: Date;
    
      
      @Type(() => Date)
      @IsOptional()
      @IsDate()
      end_date?: Date;
}
