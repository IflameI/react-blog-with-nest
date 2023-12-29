import {ApiProperty} from '@nestjs/swagger';
import {Column, DataType, Model, Table} from 'sequelize-typescript';

interface PostCreationAttrs {
    title: string;
    content: string;
    author: string;
    image: Buffer;
    views: number;
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный индентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Загаловок поста', description: 'Название поста'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    title: string;

    @ApiProperty({example: 'Описание поста', description: 'Содержание поста'})
    @Column({type: DataType.TEXT, allowNull: false})
    content: string;

    @ApiProperty({example: 'Изображение', description: 'Изображение'})
    @Column({type: 'bytea'})
    image: Buffer;

    @ApiProperty({example: '141', description: 'Количество просмотров'})
    @Column({type: DataType.INTEGER})
    views: number;

    @ApiProperty({example: '141', description: 'Количество лайков'})
    @Column({type: DataType.INTEGER})
    likes: number;

    @ApiProperty({example: 'Author', description: 'Автор статьи'})
    @Column({type: DataType.STRING})
    author: string;
}
