import { IsEmail, IsOptional, IsString, MaxLength } from "class-validator";
import { Provider } from "../entities/provider.entity";
import { OmitType } from "@nestjs/mapped-types";

export class CreateProviderDto extends OmitType(Provider, ['providerId'] as const) {
    @IsString()
    @MaxLength(100)
    providerName: string;

    @IsEmail()
    providerEmail: string;

    @IsString()
    @MaxLength(15)
    @IsOptional()
    providerPhoneNumber: string;
}
