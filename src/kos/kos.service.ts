import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateKoDto } from './dto/create-ko.dto';
import { UpdateKoDto } from './dto/update-ko.dto';
import { Prisma } from 'generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class KosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    user_id: number,
    createKoDto: CreateKoDto,
    file: Express.Multer.File,
  ) {
    try {
      return await this.prisma.kos.create({
        data: {
          user_id,
          name: createKoDto.name,
          address: createKoDto.address,
          price_per_month: createKoDto.price_per_month,
          gender: createKoDto.gender,
          description: createKoDto.description,
          kosFasilities: { create: { fasility: createKoDto.fasility } },
          kosImages: { create: { file: file.filename } },
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      return await this.prisma.kos.findMany({});
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.kos.findFirst({
        where: { id },
        select: {
          id: true,
          name: true,
          address: true,
          price_per_month: true,
          gender: true,
          description: true,
          kosFasilities: { select: { id: true, fasility: true } },
          kosImages: { select: { id: true, file: true } },
          user: { select: { name: true, email: true, phone: true } },
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async update(
    id: number,
    updateKoDto: UpdateKoDto,
    file: Express.Multer.File,
  ) {
    try {
      return await this.prisma.kos.update({
        where: { id },
        data: {
          id,
          name: updateKoDto.name,
          address: updateKoDto.address,
          price_per_month: updateKoDto.price_per_month,
          gender: updateKoDto.gender,
          description: updateKoDto.description,
          kosFasilities: {
            update: { data: { fasility: updateKoDto.fasility } },
          },
          kosImages: {
            updateMany: { data: { file: file.filename }, where: {} },
          },
        },
        select: {
          id: true,
          name: true,
          address: true,
          price_per_month: true,
          gender: true,
          description: true,
          kosFasilities: { select: { id: true, fasility: true } },
          kosImages: { select: { id: true, file: true } },
          user: { select: { name: true, email: true, phone: true } },
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: number) {
    try {
     await this.prisma.kos.delete({ where: { id } });

      return 'Kos successfully deleted!';
    } catch (error) {
      console.log(error);
    }
  }
}
