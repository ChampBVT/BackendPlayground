import { Injectable } from '@nestjs/common';
import { Article } from './article.entity';
import { CreateArticleDto } from './dto/create-article.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private readonly ArticleRepository: Repository<Article>,
  ) {}

  async createArticle(data: CreateArticleDto): Promise<Article> {
    const article = new Article();
    article.title = data.title;
    article.number = data.number;
    article.content = data.content;

    await this.ArticleRepository.save(article);

    return article;
  }

  async getArticles() {
    return await this.ArticleRepository.find();
  }

  async findArticles(query: string) {
    return await this.ArticleRepository.find({
      where: {
        title: query,
      },
    });
  }
}
