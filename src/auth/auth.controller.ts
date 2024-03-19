import {
  Body,
  Controller,
  Get,
  Headers,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto, RegisterUserDto } from './dto';
import { AuthGuard } from '@nestjs/passport';
import { Auth, GetUser } from './decorators';
import { ValidRoles } from './interfaces';
import { User } from '../users/entities/user.entity';
import { IncomingHttpHeaders } from 'http';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Post('register')
  register(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.register(registerUserDto);
  }
  @Get('private')
  // @UseGuards(AuthGuard())
  @Auth(ValidRoles.admin)

  // @Auth(ValidRoles.admin, ValidRoles.superAdmin)
  privateRoute3(@GetUser() user: User, @Headers() header: IncomingHttpHeaders) {
    return {
      ok: true,
      user,
      header,
    };
  }
}
