import { IsArray, IsString, MaxLength } from "class-validator";
import { Region } from "../entities/region.entity";
import { OmitType } from "@nestjs/mapped-types";

export class CreateRegionDto extends OmitType(Region, ['regionId'] as const) {
  @IsString()
  @MaxLength(100)
  regionName: string;

  @IsArray()
  regionStates: string[];
}
