import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('user')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post('twit')
  async login(@Body() model): Promise<any> {
    return this.authService.login(model);
  }
}