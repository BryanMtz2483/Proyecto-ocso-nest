import { IsEmail, IsOptional, IsString, MaxLength } from "class-validator";
import { Provider } from "../entities/provider.entity";
import { OmitType } from "@nestjs/mapped-types";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateProviderDto extends OmitType(Provider, ['providerId'] as const) {
    @ApiProperty()
    @IsString()
    @MaxLength(100)
    providerName: string;

    @ApiProperty()
    @IsEmail()
    providerEmail: string;

    @ApiPropertyOptional()
    @IsString()
    @MaxLength(15)
    @IsOptional()
    providerPhoneNumber: string;
}
