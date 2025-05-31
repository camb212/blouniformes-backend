// src/uniformes/controllers/detalle_venta.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { DetalleVentaService } from 'src/detalle_venta/detalle_venta.service';
import { DetalleVenta } from 'src/detalle_venta/entities/detalle_venta.entity';

@Controller('detalles')
export class DetalleVentaController {
  constructor(private readonly detalleService: DetalleVentaService) {}

  @Get()
  findAll() {
    return this.detalleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detalleService.findOne(Number(id));
  }

  @Post()
  create(@Body() data: Partial<DetalleVenta>) {
    return this.detalleService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<DetalleVenta>) {
    return this.detalleService.update(Number(id), data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.detalleService.delete(Number(id));
  }
}
