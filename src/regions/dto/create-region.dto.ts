import { IsArray, IsString, MaxLength } from "class-validator";
import { Region } from "../entities/region.entity";
import { OmitType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";

export class CreateRegionDto extends OmitType(Region, ['regionId'] as const) {
  @ApiProperty()
  @IsString()
  @MaxLength(100)
  regionName: string;

  @ApiProperty()
  @IsArray()
  regionStates: string[];
}
