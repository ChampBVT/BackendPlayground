import { ArticlesResolver } from './article.resolver';
import { Module } from '@nestjs/common';
import { ArticlesService } from './article.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './article.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  providers: [ArticlesResolver, ArticlesService],
})
export class ArticlesModule {}
