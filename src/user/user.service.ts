import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { BcryptService } from 'src/bcrypt/bcrypt.service';
@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly bcrypt: BcryptService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const hashPassword = await this.bcrypt.hashPassword(createUserDto.password);

    try {
      return await this.prisma.users.create({
        data: { ...createUserDto, password: hashPassword },
        select: { id: true, name: true, email: true, phone: true, role: true },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      return await this.prisma.users.findMany({});
    } catch (error) {
      console.log(error);
    }
  }
  async findOne(id: number) {
    try {
      return await this.prisma.users.findFirst({ where: { id } });
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      return await this.prisma.users.update({
        where: { id },
        data: updateUserDto,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.users.delete({ where: { id } });
    } catch (error) {
      console.log(error);
    }
  }
}