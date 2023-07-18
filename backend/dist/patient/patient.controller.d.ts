import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Doctor } from 'src/doctor/entities/doctor.entity';
export declare class PatientController {
    private readonly patientService;
    constructor(patientService: PatientService);
    seedPatient(): Promise<string>;
    create(createPatientDto: CreatePatientDto): Promise<import("./entities/patient.entity").Patient>;
    findAll(): Promise<import("./entities/patient.entity").Patient[]>;
    findOne(id: string): Promise<import("./entities/patient.entity").Patient>;
    update(id: string, updatePatientDto: UpdatePatientDto): Promise<import("typeorm").UpdateResult>;
    update2(id: string, doctorIds: number[]): Promise<import("./entities/patient.entity").Patient>;
    remove(id: string): string;
    assingDoctor(patientId: number, doctorId: any): Promise<import("./entities/patient.entity").Patient>;
    buscarDoctores(doctorIds: any): Promise<Doctor[]>;
}
