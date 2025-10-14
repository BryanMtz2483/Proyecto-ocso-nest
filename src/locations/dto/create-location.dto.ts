import { ArrayNotEmpty, IsArray, IsObject, IsOptional, IsString, IsUUID, MaxLength } from "class-validator";
import { Location } from "../entities/location.entity";
import { OmitType } from "@nestjs/mapped-types";
import { Region } from "src/regions/entities/region.entity";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateLocationDto extends OmitType(Location, ['locationId'] as const) {
    @ApiProperty()
    @IsString()
    @MaxLength(35)
    locationName: string;

    @ApiProperty()
    @IsString()
    @MaxLength(160)
    locationAddress: string;

    @ApiProperty()
    @IsArray()
    @ArrayNotEmpty()
    locationLatLng: number[];

    @ApiPropertyOptional()
    @IsObject()
    @IsOptional()
    region: Region;

    @IsUUID()
    @IsOptional()
    manager : string;
}
