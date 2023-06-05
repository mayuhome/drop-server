import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '101.43.37.77',
      port: 3306,
      username: 'root',
      password: 'q1w2e3r4',
      database: 'water-drop',
      entities: [`${__dirname}/../modules/**/*.entity{.ts,.js}`],
      logging: true,
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
