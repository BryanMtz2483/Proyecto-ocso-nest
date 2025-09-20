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
  private products: CreateProductDto[] = [
    {
      productId: uuid(),
      productName: 'Sabritas Normal 48g',
      price: 29,
      countSeal: 3,
      provider: uuid()
    },
    {
      productId: uuid(),
      productName: 'Coca Cola 600ml',
      price: 40,
      countSeal: 2,
      provider: uuid()
    },
    {
      productId: uuid(),
      productName: 'Agua Ciel 1L',
      price: 15,
      countSeal: 2,
      provider: uuid()
    }
  ]
  create(createProductDto: CreateProductDto) {
    const product = this.productRepositoty.save(createProductDto)
    return product;
  }

  findAll() {
    return this.productRepositoty.find()
  }

  findOne(id: string) {
    const product= this.productRepositoty.findOneBy({
      productId: id
    })
    if (!product) throw new NotFoundException()
    return product;
  }
  findByProvider(id: string){
    const productsFound = this.products.filter((product) => product.provider == id)
    if (productsFound.length == 0) throw new NotFoundException();
    return productsFound
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
