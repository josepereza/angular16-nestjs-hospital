import { HospitalService } from './hospital.service';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';
export declare class HospitalController {
    private readonly hospitalService;
    constructor(hospitalService: HospitalService);
    create(createHospitalDto: CreateHospitalDto): string;
    findAll(): Promise<import("./entities/hospital.entity").Hospital[]>;
    findOne(id: string): string;
    update(id: string, updateHospitalDto: UpdateHospitalDto): string;
    remove(id: string): string;
}
