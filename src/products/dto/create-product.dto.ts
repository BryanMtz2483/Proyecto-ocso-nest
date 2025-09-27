import { 
  IsInt, IsNumber, IsObject, IsOptional, IsString, IsUUID, MaxLength 
} from "class-validator";
import { Product } from "../entities/product.entity";
import { Provider } from "src/providers/entities/provider.entity";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";


export class CreateProductDto extends Product{
  @ApiPropertyOptional()
  @IsString()
  @IsUUID("4")
  @IsOptional()
  declare productId: string;

  @ApiProperty()
  @IsString()
  @MaxLength(40)
  declare productName: string;

  @ApiProperty()
  @IsNumber()
  declare price: number;

  @ApiProperty()
  @IsInt()
  declare countSeal: number;

  @ApiProperty()
  @IsObject()
  declare provider: Provider;
}
