import { Injectable } from '@nestjs/common';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hospital } from './entities/hospital.entity';

@Injectable()
export class HospitalService {

  constructor(
   
    @InjectRepository(Hospital)
    private hospitalRepository: Repository<Hospital>,
  ) {}
  create(createHospitalDto: CreateHospitalDto) {
    return 'This action adds a new hospital';
  }

  findAll() {
    return this.hospitalRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} hospital`;
  }

  update(id: number, updateHospitalDto: UpdateHospitalDto) {
    return `This action updates a #${id} hospital`;
  }

  remove(id: number) {
    return `This action removes a #${id} hospital`;
  }
}
