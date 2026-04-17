import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateReviewDto {

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