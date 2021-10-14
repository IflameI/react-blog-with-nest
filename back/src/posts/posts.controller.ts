import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';

@ApiTags('Статьи')
@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @ApiOperation({ summary: 'Создание статьи' })
  @ApiResponse({ status: 200, type: Post })
  @Post()
  create(@Body() dto: CreatePostDto) {
    return this.postService.createPost(dto);
  }

  @ApiOperation({ summary: 'Получить 3 статьи' })
  @ApiResponse({ status: 200, type: [Post] })
  @Get('/top-articles')
  getAll() {
    return this.postService.getTopThreeArticle();
  }
}
