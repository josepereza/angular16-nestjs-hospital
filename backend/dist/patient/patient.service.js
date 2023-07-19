"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientService = void 0;
const common_1 = require("@nestjs/common");
const patient_entity_1 = require("./entities/patient.entity");
const doctor_entity_1 = require("../doctor/entities/doctor.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const hospital_entity_1 = require("../hospital/entities/hospital.entity");
const typeorm_3 = require("typeorm");
let PatientService = class PatientService {
    constructor(patientRepository, doctorRepository, hospitalRepository) {
        this.patientRepository = patientRepository;
        this.doctorRepository = doctorRepository;
        this.hospitalRepository = hospitalRepository;
        this.doctorObjet = {};
    }
    async seedPatient() {
        const newDoctor1 = this.doctorRepository.create();
        const newDoctor2 = this.doctorRepository.create();
        newDoctor1.name = 'Isidro2';
        newDoctor2.name = 'Juanjo';
        await this.doctorRepository.save(newDoctor1);
        await this.doctorRepository.save(newDoctor2);
        const newHospital1 = this.hospitalRepository.create();
        const newHospital2 = this.hospitalRepository.create();
        newHospital1.name = 'Arrixaca';
        newHospital1.city = 'Murcia';
        newHospital2.name = 'Virgen Del Carmen';
        newHospital2.city = 'Alicante';
        await this.hospitalRepository.save(newHospital1);
        await this.hospitalRepository.save(newHospital2);
        const newPatient = this.patientRepository.create();
        newPatient.doctors = [newDoctor1, newDoctor2];
        newPatient.dni = '247247242';
        newPatient.name = 'jose';
        newPatient.surname = 'perez';
        newPatient.hospital = newHospital1;
        await this.patientRepository.save(newPatient);
        const newPatient2 = this.patientRepository.create();
        newPatient2.doctors = [newDoctor2];
        newPatient2.dni = '247247242';
        newPatient2.name = 'santi';
        newPatient2.surname = 'sepulveda';
        newPatient2.hospital = newHospital2;
        await this.patientRepository.save(newPatient2);
        return '2 registros agregados';
    }
    async create(createPatientDto) {
        const { name, surname, dni, doctors, hospitalId } = createPatientDto;
        const hospital = await this.hospitalRepository.findOne({
            where: { id: createPatientDto.hospitalId },
        });
        const doctores = await this.doctorRepository.findBy({
            id: (0, typeorm_3.In)(doctors),
        });
        const newPatient = this.patientRepository.create({
            name,
            surname,
            dni,
            hospital,
            doctors: doctores,
        });
        return this.patientRepository.save(newPatient);
    }
    findAll() {
        return this.patientRepository.find({
            relations: {
                doctors: true,
                hospital: true,
            },
        });
    }
    findOne(id) {
        return this.patientRepository.findOne({
            where: {
                id,
            },
            relations: {
                doctors: true,
                hospital: true,
            },
        });
    }
    async updatePaciente(id, updatePatientDto) {
        console.log('actualiza paciente ', updatePatientDto);
        const { name, surname, dni, hospitalId } = updatePatientDto;
        const mihospital = await this.hospitalRepository.findOne({
            where: { id: hospitalId },
        });
        const paciente = await this.patientRepository.findOne({
            where: { id },
        });
        console.log('mihospital/paciente', mihospital, paciente);
        paciente.name = name;
        paciente.surname = surname;
        paciente.dni = dni;
        paciente.hospital = mihospital;
        return this.patientRepository.update({ id }, paciente);
    }
    async update(id, updatePatientDto) {
        console.log('actualiza hospital', updatePatientDto);
        const mihospital = await this.hospitalRepository.findOne({
            where: { id: updatePatientDto },
        });
        const paciente = await this.patientRepository.findOne({
            where: { id },
            relations: { doctors: true, hospital: true },
        });
        paciente.hospital = mihospital;
        return this.patientRepository.save(paciente);
    }
    async updateDoctors(id, body) {
        console.log('mi body', body);
        const doctorIds = body;
        const doctores = await this.doctorRepository.findBy({ id: (0, typeorm_3.In)(doctorIds) });
        const paciente = await this.patientRepository.findOne({
            where: { id },
            relations: { doctors: true, hospital: true },
        });
        paciente.doctors = doctores;
        return await this.patientRepository.save(paciente);
    }
    remove(id) {
        return `This action removes a #${id} patient`;
    }
    async assignDoctor(patient_id, doctor_id) {
        console.log(patient_id, doctor_id);
        const paciente = await this.patientRepository.findOne({
            where: { id: patient_id },
            relations: { doctors: true },
        });
        console.log(paciente.name);
        const doctor = await this.doctorRepository.findOne({
            where: { id: doctor_id.doctorId },
        });
        console.log('patient-doctor', doctor.name);
        paciente.doctors.push(doctor);
        if (paciente && doctor) {
            return await this.patientRepository.save(paciente);
        }
        throw new common_1.HttpException('Registros no encontrados', common_1.HttpStatus.NOT_FOUND);
    }
    async buscardoctores(body) {
        const doctorIds = body.doctorIds;
        return await this.doctorRepository.findBy({ id: (0, typeorm_3.In)(doctorIds) });
    }
};
PatientService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(patient_entity_1.Patient)),
    __param(1, (0, typeorm_1.InjectRepository)(doctor_entity_1.Doctor)),
    __param(2, (0, typeorm_1.InjectRepository)(hospital_entity_1.Hospital)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], PatientService);
exports.PatientService = PatientService;
//# sourceMappingURL=patient.service.js.map