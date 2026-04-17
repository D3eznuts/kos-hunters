import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthenticationDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;
}
