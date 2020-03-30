import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User, Client } from './entities';
import {AuthController} from "./controllers/auth.controller";
import {AuthService} from "./services/auth.service";
import { JwtStrategy } from './common/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './common/constants';
import { ClientController } from './controllers/client.controller';
import { ClientService } from './services/client.service';

const enities = [
  User,
  Client
];

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: "mongodb",
          host: 'localhost',
          port: 27017,
          username: 'qwe',
          password: 'qwe',
          database: 'telega',
          entities: [...enities],
      }),
      TypeOrmModule.forFeature([...enities]),
    PassportModule.register({
      defaultStrategy: 'jwt'
    }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiresIn},
    })
  ],
  controllers: [AppController, AuthController, ClientController],
  providers: [AppService, AuthService, JwtStrategy, ClientService],
})
export class AppModule {}
