import { Doctor } from 'src/doctor/entities/doctor.entity';
import { Hospital } from 'src/hospital/entities/hospital.entity';
export declare class Patient {
    id: number;
    name: string;
    surname: string;
    dni: string;
    hospital: Hospital;
    doctors: Doctor[];
}
