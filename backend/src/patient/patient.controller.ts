import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Doctor } from 'src/doctor/entities/doctor.entity';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get('seed')
  seedPatient() {
    return this.patientService.seedPatient();
  }

  @Post()
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientService.create(createPatientDto);
  }

  @Get()
  findAll() {
    return this.patientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientService.findOne(+id);
  }

 /*  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientService.update(+id, updatePatientDto);
  } */
 
  // actualizamos los doctores de un paciente
  @Post(':id/doctors')
  update2(@Param('id') id: string, @Body() doctorIds: number[]) {
    console.log('actualiza doctores')
    console.log('docltores en patient-controller', doctorIds)
    return this.patientService.updateDoctors(+id, doctorIds);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientService.remove(+id);
  }

  @Post(':id/doctor')
  assingDoctor(
    @Param('id', ParseIntPipe) patientId: number,
    @Body() doctorId: any,
  ) {
    return this.patientService.assignDoctor(patientId, doctorId);
  }

  //prueba para buscar varios doctores
  @Post('doctores')
  buscarDoctores(
  
    @Body() doctorIds: any,
  ) {
   
    return this.patientService.buscardoctores(doctorIds)
}
}