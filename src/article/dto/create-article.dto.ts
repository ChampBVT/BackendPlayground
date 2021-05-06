import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateArticleDto {
  @Field() readonly id?: string;
  @Field() readonly title: string;
  @Field() readonly content: string;
  @Field() readonly number: number;
}
