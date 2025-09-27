import { IsEmail, IsIn, IsOptional, IsString, MinLength } from "class-validator";
import { User } from "../entities/user.entity";
import { OmitType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto extends OmitType(User, ['userId'] as const) {

    @ApiProperty({
        default: "User@gmail.com"
    })
    @IsEmail()
    userEmail: string;

    @ApiProperty({
        default: "password1234"
    })
    @IsString()
    @MinLength(8)
    userPassword: string;

    @ApiProperty({
        default: "Employee"
    })
    @IsOptional()
    @IsIn(["Admin","Manager","Employee"])
    userRoles:string[];

}
