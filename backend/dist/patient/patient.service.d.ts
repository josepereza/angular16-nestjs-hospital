import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './entities/patient.entity';
import { Doctor } from 'src/doctor/entities/doctor.entity';
import { Repository } from 'typeorm';
import { Hospital } from 'src/hospital/entities/hospital.entity';
export declare class PatientService {
    private patientRepository;
    private doctorRepository;
    private hospitalRepository;
    doctorObjet: {};
    constructor(patientRepository: Repository<Patient>, doctorRepository: Repository<Doctor>, hospitalRepository: Repository<Hospital>);
    seedPatient(): Promise<string>;
    create(createPatientDto: CreatePatientDto): Promise<Patient>;
    findAll(): Promise<Patient[]>;
    findOne(id: number): Promise<Patient>;
    update(id: number, updatePatientDto: UpdatePatientDto): Promise<import("typeorm").UpdateResult>;
    updateDoctors(id: number, doctors: any): Promise<Patient>;
    remove(id: number): string;
    assignDoctor(patient_id: any, doctor_id: any): Promise<Patient>;
}
