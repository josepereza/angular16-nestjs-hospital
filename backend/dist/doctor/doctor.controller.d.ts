import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
export declare class DoctorController {
    private readonly doctorService;
    constructor(doctorService: DoctorService);
    create(createDoctorDto: CreateDoctorDto): string;
    findAll(): Promise<import("./entities/doctor.entity").Doctor[]>;
    findOne(id: string): string;
    update(id: string, updateDoctorDto: UpdateDoctorDto): string;
    remove(id: string): string;
}
