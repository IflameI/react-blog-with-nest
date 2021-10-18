export class CreatePostDto {
  readonly title: string;
  readonly content: string;
  readonly userId: number;
  readonly image: string;
  readonly views: number = 0;
  readonly likes: number = 0;
}
