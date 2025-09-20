import { IsEmail, IsNumber, IsString, MaxLength } from "class-validator";
import { Manager } from "../entities/manager.entity";
import { OmitType } from "@nestjs/mapped-types";

export class CreateManagerDto extends OmitType(Manager, ['managerId' as const]){
    @IsString()
    @MaxLength(80)
    declare managerFullName: string;
    @IsString()
    @IsEmail()
    declare managerEmail: string;
    @IsNumber()
    declare managerSalary: number;
    @IsString()
    @MaxLength(16)
    declare managerPhoneNumber: string;
}
