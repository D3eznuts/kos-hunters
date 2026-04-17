import { PartialType } from '@nestjs/swagger';
import { CreateReviewDto } from './create-review.dto';
import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';

export class UpdateReviewDto extends PartialType(CreateReviewDto) {
        @IsNotEmpty()
        @IsNumber()
        kos_id!: number;
    
    
        @IsNotEmpty()
        @IsString()
        comment!: string;
    
      
        @IsOptional()
        @IsNumber()
        user_id?: number;
}
