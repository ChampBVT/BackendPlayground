import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesResolver } from './article.resolver';

describe('ArticleResolver', () => {
  let resolver: ArticlesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticlesResolver],
    }).compile();

    resolver = module.get<ArticlesResolver>(ArticlesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
