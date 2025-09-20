import { Injectable, MethodNotAllowedException, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {v4 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepositoty: Repository<Product>
  ){}
  create(createProductDto: CreateProductDto) {
    const product = this.productRepositoty.save(createProductDto)
    return product;
  }

  findAll() {
    return this.productRepositoty.find();
  }

  findOne(id: string) {
    const product= this.productRepositoty.findOneBy({
      productId: id
    })
    if (!product) throw new NotFoundException()
    return product;
  }
  findByProvider(id: string){
    return this.productRepositoty.findBy({
      provider: {
        providerId: id,
      }
    })
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const produtToUpdate = await this.productRepositoty.preload({
      productId: id,
      ...updateProductDto
    })
    if (!produtToUpdate) throw new NotFoundException()
    this.productRepositoty.save(produtToUpdate);
  return produtToUpdate;
  }

  async remove(id: string) {
    this.findOne(id)
    this.productRepositoty.delete({
      productId: id
    })
    return{
      message: `Objeto con id ${id} fué eliminado`
    }
  }
}
