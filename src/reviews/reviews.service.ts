import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class ReviewsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createReviewDto: CreateReviewDto) {
    try {
      const { user_id, ...data } = createReviewDto;
      const createData: any = {
        ...data,
      };
      if (user_id !== undefined) {
        createData.user_id = user_id;
      }
      return await this.prisma.reviews.create({
        data: createData,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      return await this.prisma.reviews.findMany({});

    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.reviews.findFirst({ where: { id } });

    } catch (error) {
      console.log(error);
    }
  }

  async update(id: number, updateReviewDto: UpdateReviewDto) {
    try {
     return await this.prisma.reviews.update({
        where: { id },
        data: { ...updateReviewDto },
      });

    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: number) {
    try {
     await this.prisma.reviews.delete({ where: { id } });

        return 'successfully deleted';
    } catch (error) {
      console.log(error);
    }
  }
}
