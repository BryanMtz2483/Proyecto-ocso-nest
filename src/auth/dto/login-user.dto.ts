import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsString, MinLength } from "class-validator";

export class LoginUserDto{
    @ApiProperty({
        default: "User@gmail.com"
    })
    @IsString()
    @IsEmail()
    userEmail: string;

    @ApiProperty({
        default: "password1234"
    })
    @IsString()
    @MinLength(8)
    userPassword: string;

}