import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { ApiResponse } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import type { Response } from 'express';
import { TOKEN_NAME } from './constants/jwt.constants';
import { Cookies } from './decorators/cookies.decorator';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiResponse({
      status: 201,
      example: {
        userId: "UUID",
        userEmail : "mhzb30@gmail.com",
        userPassword: "$2b$05$OnKxb1Dkk06yOYvUcAXSTeJJA04Lbo60YscOEOVOY928yD9Jlz8Jm",
        userRoles : ["Employee"]
      } as User
    })
  @Post()
  signup(@Body() createUserDto: CreateUserDto){
    return this.authService.registerUser(createUserDto)
  }
  @Post("login")
  async login(@Body() loginUserDto: LoginUserDto, @Res({passthrough: true}) response: Response, @Cookies() cookies: any){
    const token = await this.authService.loginUser(loginUserDto)
    response.cookie(TOKEN_NAME, token,{
      httpOnly: false,
      secure: true,
      sameSite: 'none',
      maxAge: 1000 * 60 * 60 * 24 * 7,
    })
    return token;
  }
  @Patch("/:email")
  updateUser(@Param('email') userEmail: string ,@Body() updateUserDto: UpdateUserDto){
    return this.authService.updateUser(userEmail, updateUserDto)
  }
  
}
