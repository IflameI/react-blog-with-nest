import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
  @Get('/threeArticles')
  getThreeArticles() {
    return this.postService.getThreeArticles();
  }

  @ApiOperation({ summary: 'Получить отсортированные по дате обновления' })
  @ApiResponse({ status: 200, type: [Post] })
  @Get('/recentArticles')
  getRecentArticles() {
    return this.postService.getRecentArticles();
  }

  @ApiOperation({ summary: 'Получить статьи отсортированные по популярности' })
  @ApiResponse({ status: 200, type: [Post] })
  @Get('/popularArticles')
  getSortArticlesByViews() {
    return this.postService.getSortArticlesByViews();
  }

  @ApiOperation({ summary: 'Получить статьи отсортированные по лайкам' })
  @ApiResponse({ status: 200, type: [Post] })
  @Get('/mostLikesArticles')
  getSortArticlesByLikes() {
    return this.postService.getSortArticlesByLikes();
  }

  @ApiOperation({ summary: 'Получить статью по id' })
  @ApiResponse({ status: 200, type: Post })
  @Get('arcticle/:id')
  getArticleById(@Param('id') id: number) {
    return this.postService.getArticleById(id);
  }
}
