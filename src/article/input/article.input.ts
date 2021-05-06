import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class inputArticle {
  @Field() readonly title: string;
  @Field() readonly content: string;
  @Field() readonly number: number;
}
