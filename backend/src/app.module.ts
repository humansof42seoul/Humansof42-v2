import { Module } from '@nestjs/common';
import { join } from 'path/posix';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'jwon',
      database: 'hof',
      logging: false,
      entities: ['dist/**/*.entity{.ts,.js}'],
      subscribers: ['dist/subscriber/**/*.ts'],
      cli: {
        migrationsDir: 'dist/migration',
        subscribersDir: 'dist/subscriber',
      },
      synchronize: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
