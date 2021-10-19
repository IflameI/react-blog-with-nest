export class CreatePostDto {
  readonly title: string;
  readonly content: string;
  readonly image: string;
  readonly author: string = 'reactNews';
  readonly views: number = 0;
  readonly likes: number = 0;
}
