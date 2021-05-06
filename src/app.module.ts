import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ArticlesModule } from './article/article.module';

@Module({
  imports: [
    ArticlesModule,
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gpl',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
