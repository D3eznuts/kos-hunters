import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UserController } from './user.controller';
import { BcryptService } from 'src/bcrypt/bcrypt.service';

@Module({
  controllers: [UserController],
  providers: [UsersService,BcryptService],
})
export class UserModule {}
