import { IsEmail, IsNumber, IsObject, IsOptional, IsString, MaxLength } from "class-validator";
import { Manager } from "../entities/manager.entity";
import { OmitType } from "@nestjs/mapped-types";
import { Location } from "src/locations/entities/location.entity";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateManagerDto extends OmitType(Manager, ['managerId' as const]){
    @ApiProperty()
    @IsString()
    @MaxLength(80)
    declare managerFullName: string;

    @ApiProperty()
    @IsString()
    @IsEmail()
    declare managerEmail: string;

    @ApiProperty()
    @IsNumber()
    declare managerSalary: number;

    @ApiProperty()
    @IsString()
    @MaxLength(16)
    declare managerPhoneNumber: string;

    @ApiPropertyOptional()
    @IsObject()
    @IsOptional()
    location: Location;
}
