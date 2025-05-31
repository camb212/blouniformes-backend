// src/uniformes/detalle_venta/detalle_venta.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetalleVenta } from 'src/detalle_venta/entities/detalle_venta.entity';
import { DetalleVentaService } from 'src/detalle_venta/detalle_venta.service';
import { DetalleVentaController } from 'src/detalle_venta/detalle_venta.controller';
import { Venta } from 'src/detalle_venta/entities/detalle_venta.entity';
import { Producto } from 'src/detalle_venta/entities/detalle_venta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DetalleVenta, Venta, Producto])],
  controllers: [DetalleVentaController],
  providers: [DetalleVentaService],
})
export class DetalleVentaModule {}
