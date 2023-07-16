import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Repository } from 'typeorm';
import { Doctor } from './entities/doctor.entity';
export declare class DoctorService {
    private doctorRepository;
    constructor(doctorRepository: Repository<Doctor>);
    create(createDoctorDto: CreateDoctorDto): string;
    findAll(): Promise<Doctor[]>;
    findOne(id: number): string;
    update(id: number, updateDoctorDto: UpdateDoctorDto): string;
    remove(id: number): string;
}
