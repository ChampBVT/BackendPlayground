import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateArticleDto } from './dto/create-article.dto';
import { ArticlesService } from './article.service';
import { inputArticle } from './input/article.input';

@Resolver()
export class ArticlesResolver {
  constructor(private readonly articleService: ArticlesService) {}

  @Query(() => [CreateArticleDto])
  async getArticles() {
    return this.articleService.getArticles();
  }

  @Query(() => [CreateArticleDto])
  async findArticle(@Args('query', { type: () => String }) query: string) {
    return this.articleService.findArticles(query);
  }

  @Mutation(() => CreateArticleDto)
  async createArticle(@Args('article') data: inputArticle) {
    return this.articleService.createArticle(data);
  }
}
