import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthenticationDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async auth(@Body() authenticationDto: AuthenticationDto) {
    return await this.authService.auth(authenticationDto);
    
  }
}
