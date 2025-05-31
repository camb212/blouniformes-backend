import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { Producto } from './entities/producto.entity';

@Controller('uniformes-medicos')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Get()
  obtenerTodosLosUniformesMedicos() {
    return this.productoService.findAll();
  }

  @Get(':id')
  obtenerUniformeMedicoPorId(@Param('id') id: string) {
    return this.productoService.findOne(Number(id));
  }

  @Post()
  registrarUniformeMedico(@Body() data: Partial<Producto>) {
    return this.productoService.create(data);
  }

  @Put(':id')
  actualizarUniformeMedico(@Param('id') id: string, @Body() data: Partial<Producto>) {
    return this.productoService.update(Number(id), data);
  }

  @Delete(':id')
  eliminarUniformeMedico(@Param('id') id: string) {
    return this.productoService.delete(Number(id));
  }
}
