import { PartialType } from '@nestjs/mapped-types';
import { CreateArticleDto } from './create-post.dto';

export class UpdatePostDto extends PartialType(CreateArticleDto) {}
