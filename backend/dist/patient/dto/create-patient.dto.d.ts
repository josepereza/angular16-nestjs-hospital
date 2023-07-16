import { Doctor } from 'src/doctor/entities/doctor.entity';
export declare class CreatePatientDto {
    name: string;
    surname: string;
    dni: string;
    hospitalId: number;
    doctors: Doctor[];
}
