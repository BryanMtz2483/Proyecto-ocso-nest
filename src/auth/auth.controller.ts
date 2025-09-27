import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { ApiResponse } from '@nestjs/swagger';
import { User } from './entities/user.entity';
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
  login(@Body() loginUserDto: LoginUserDto){
    return this.authService.loginUser(loginUserDto)
  }
  @Patch("/:email")
  updateUser(@Param('email') userEmail: string ,@Body() updateUserDto: UpdateUserDto){
    return this.authService.updateUser(userEmail, updateUserDto)
  }
  
}
