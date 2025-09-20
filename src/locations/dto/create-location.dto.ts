import { ArrayNotEmpty, IsArray, IsString, MaxLength } from "class-validator";
import { Location } from "../entities/location.entity";
import { OmitType } from "@nestjs/mapped-types";

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
}
