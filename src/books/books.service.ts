import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBookDto: CreateBookDto) {
    try {
      return await this.prisma.books.create({
        data: { ...createBookDto },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      return await this.prisma.books.findMany({});

    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.books.findFirst({ where: { id } });

    } catch (error) {
      console.log(error);
    }
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    try {
      return await this.prisma.books.update({
        where: { id },
        data: { ...updateBookDto },
      });

    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: number) {
    try {
      await this.prisma.books.delete({ where: { id } });
      
      return 'successfully deleted';
    } catch (error) {
      console.log(error);
    }
  }
}
