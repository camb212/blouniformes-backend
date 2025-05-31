import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,

    private readonly dataSource: DataSource,
  ) {}

  findAll() {
    return this.productoRepository.find({
      relations: ['detalles'],  // para traer info de ventas si quieres
      order: { nombre: 'ASC' },
    });
  }

  findOne(id: number) {
    return this.productoRepository.findOne({
      where: { id },
      relations: ['detalles'],
    });
  }

  async create(data: Partial<Producto>) {
    const producto = this.productoRepository.create(data);
    return await this.productoRepository.save(producto);
  }

  async update(id: number, data: Partial<Producto>) {
    return await this.dataSource.transaction(async manager => {
      await manager.update(Producto, id, data);
      return this.findOne(id);
    });
  }

  async delete(id: number) {
    return await this.dataSource.transaction(async manager => {
      await manager.delete(Producto, id);
      return { deleted: true };
    });
  }
}
