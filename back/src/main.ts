import {NestFactory} from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {AppModule} from './app.module';
import {ValidationPipe} from './pipes/validation.pipe';
import {json} from "express";

async function start() {
    const PORT = process.env.PORT || 3000;
    const app = await NestFactory.create(AppModule, {cors: true});

    const config = new DocumentBuilder()
        .setTitle('ReactJSBlog')
        .setDescription('Документация REST API')
        .setVersion('1.0.0')
        .addTag('nest')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);

    app.useGlobalPipes(new ValidationPipe());
    app.use(json({limit: '10mb'}));


    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}

start();
