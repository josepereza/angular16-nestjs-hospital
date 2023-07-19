import { CreatePatientDto } from './dto/create-patient.dto';
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
    updatePaciente(id: number, updatePatientDto: any): Promise<import("typeorm").UpdateResult>;
    update(id: number, updatePatientDto: number): Promise<Patient>;
    updateDoctors(id: number, body: any): Promise<Patient>;
    remove(id: number): string;
    assignDoctor(patient_id: any, doctor_id: any): Promise<Patient>;
    buscardoctores(body: any): Promise<Doctor[]>;
}
