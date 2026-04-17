import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BcryptModule } from './bcrypt/bcrypt.module';
import { KosModule } from './kos/kos.module';
import { BooksModule } from './books/books.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [PrismaModule, UserModule, AuthModule, BcryptModule, KosModule, BooksModule, ReviewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
