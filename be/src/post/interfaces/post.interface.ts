import { ArticleEntity } from '../entities/post.entity';

export interface ArticleData {
  slug: string;
  title: string;
  body?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ArticleRO {
  article: ArticleEntity;
}

export interface ArticlesRO {
  list: ArticleEntity[];
  count: number;
}
