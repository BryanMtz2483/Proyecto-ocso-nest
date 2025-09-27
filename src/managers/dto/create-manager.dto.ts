import { IsEmail, IsNumber, IsObject, IsOptional, IsString, MaxLength } from "class-validator";
import { Manager } from "../entities/manager.entity";
import { OmitType } from "@nestjs/mapped-types";
import { Location } from "src/locations/entities/location.entity";

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
    @IsObject()
    @IsOptional()
    location: Location;
}
