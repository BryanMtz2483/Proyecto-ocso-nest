import { IsEmail, IsString, MinLength } from "class-validator";
import { User } from "../entities/user.entity";
import { OmitType } from "@nestjs/mapped-types";

export class CreateUserDto extends OmitType(User, ['userId'] as const) {
    @IsEmail()
    userEmail: string;

    @IsString()
    @MinLength(8)
    userPassword: string;
}
