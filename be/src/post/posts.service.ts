import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import { ArticleEntity } from './entities/post.entity';
import { CreateArticleDto } from './dto/create-post.dto';

import { ArticleRO, ArticlesRO } from './interfaces/post.interface';
const slug = require('slug');

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articleRepository: Repository<ArticleEntity>,
  ) {}

  async findAll(query): Promise<ArticlesRO> {
    const qb = await getRepository(ArticleEntity).createQueryBuilder('article');

    qb.orderBy('article.created', 'DESC');

    const count = await qb.getCount();

    if ('limit' in query) {
      qb.limit(query.limit);
    }

    if ('offset' in query) {
      qb.offset(query.offset);
    }

    const list = await qb.getMany();

    return { list, count };
  }

  async findOne(where): Promise<ArticleRO> {
    const article = await this.articleRepository.findOne(where);
    return { article };
  }

  async create(articleData: CreateArticleDto): Promise<ArticleEntity> {
    let article = new ArticleEntity();
    article.title = articleData.title;
    article.body = articleData.body;
    article.slug = this.slugify(articleData.title);

    const newArticle = await this.articleRepository.save(article);

    return newArticle;
  }

  async update(slug: string, articleData: any): Promise<ArticleRO> {
    let toUpdate = await this.articleRepository.findOne({ slug: slug });
    let updated = Object.assign(toUpdate, articleData);
    const article = await this.articleRepository.save(updated);
    return { article };
  }

  async delete(slug: string): Promise<DeleteResult> {
    return await this.articleRepository.delete({ slug: slug });
  }

  slugify(title: string) {
    return (
      slug(title, { lower: true }) +
      '-' +
      ((Math.random() * Math.pow(36, 6)) | 0).toString(36)
    );
  }
}
