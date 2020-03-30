import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as crypto from 'crypto';

// Enities
import { User } from '../entities';

// Services
// import { UsersService } from './users.service';

@Injectable()
export class AuthService {
    constructor(
        // private readonly usersService: UsersService,
        // private readonly jwtService: JwtService,

        // eslint-disable-next-line @typescript-eslint/no-empty-function
    ) { }

    // private async validate(model): Promise<User> {
    //     return await this.usersService.findByEmail(model.email);
    // }
    //
    // public async getUserById(id: string): Promise<User> {
    //     return await this.usersService.findById(id);
    // }
    //
    // public async login(model): Promise<User | { status: number }> {
    //     return this.validate(model).then(userData => {
    //         model.password = crypto.createHmac('sha256', model.password).digest('hex');
    //         if (!userData) {
    //             return { status: 404 };
    //         }
    //         if (userData.password !== model.password) {
    //             return { status: 404 };
    //         }
    //         const payload = `${userData.id}`;
    //         const accessToken = this.jwtService.sign(payload);
    //
    //         return {
    //             expiresIn: 3600,
    //             accessToken,
    //             userId: userData.id,
    //             status: 200,
    //         };
    //     });
    // }
    //
    // public async register(user): Promise<User> {
    //     user.password = crypto.createHmac('sha256', user.password).digest('hex');
    //     return this.usersService.create(user);
    }