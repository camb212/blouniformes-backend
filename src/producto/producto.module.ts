import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
import { DetalleVenta } from 'src/detalle_venta/entities/detalle_venta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Producto, DetalleVenta])],
  controllers: [ProductoController],
  providers: [ProductoService],
})
export class ProductoModule {}
