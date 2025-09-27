import { ArrayNotEmpty, IsArray, IsObject, IsOptional, IsString, MaxLength } from "class-validator";
import { Location } from "../entities/location.entity";
import { OmitType } from "@nestjs/mapped-types";
import { Region } from "src/regions/entities/region.entity";

export class CreateLocationDto extends OmitType(Location, ['locationId'] as const) {
    @IsString()
    @MaxLength(35)
    locationName: string;

    @IsString()
    @MaxLength(160)
    locationAddress: string;

    @IsArray()
    @ArrayNotEmpty()
    locationLatLng: number[];

    @IsObject()
    @IsOptional()
    region: Region;
}
