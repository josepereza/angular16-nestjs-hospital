import { CreateHospitalDto } from './dto/create-hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';
import { Repository } from 'typeorm';
import { Hospital } from './entities/hospital.entity';
export declare class HospitalService {
    private hospitalRepository;
    constructor(hospitalRepository: Repository<Hospital>);
    create(createHospitalDto: CreateHospitalDto): string;
    findAll(): Promise<Hospital[]>;
    findOne(id: number): string;
    update(id: number, updateHospitalDto: UpdateHospitalDto): string;
    remove(id: number): string;
}
