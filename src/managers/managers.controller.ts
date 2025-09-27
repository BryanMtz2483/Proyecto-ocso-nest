import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { ManagersService } from './managers.service';
import { CreateManagerDto } from './dto/create-manager.dto';
import { UpdateManagerDto } from './dto/update-manager.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ROLES } from 'src/auth/constants/roles.constants';
import { ApiAuth } from 'src/auth/decorators/api.decorator';
import { ApiResponse } from '@nestjs/swagger';
import { Manager } from './entities/manager.entity';

@ApiAuth()
@Controller('managers')
export class ManagersController {
  constructor(private readonly managersService: ManagersService) {}

  @Auth()
  @ApiResponse({
      status: 201,
      example: {
        managerId: "UUID",
        managerFullName: "Victor Manuel Vicente",
        managerEmail: "manager@gmail.com",
        managerPhoneNumber: "13232424323",
        managerSalary: 1233
      } as Manager
    })
  @Post()
  create(@Body() createManagerDto: CreateManagerDto) {
    return this.managersService.create(createManagerDto);
  }

  @Auth()
  @Get()
  findAll() {
    return this.managersService.findAll();
  }

  @Auth()
  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe({version: '4'})) id: string) {
    return this.managersService.findOne(id);
  }

  @Auth(ROLES.MANAGER)
  @Patch(':id')
  update(@Param('id', new ParseUUIDPipe({version: '4'})) id: string, @Body() updateManagerDto: UpdateManagerDto) {
    return this.managersService.update(id, updateManagerDto);
  }

  @Auth()
  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe({version: '4'})) id: string) {
    return this.managersService.remove(id);
  }
}
