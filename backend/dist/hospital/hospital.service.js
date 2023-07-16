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
exports.HospitalService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const hospital_entity_1 = require("./entities/hospital.entity");
let HospitalService = class HospitalService {
    constructor(hospitalRepository) {
        this.hospitalRepository = hospitalRepository;
    }
    create(createHospitalDto) {
        return 'This action adds a new hospital';
    }
    findAll() {
        return this.hospitalRepository.find();
    }
    findOne(id) {
        return `This action returns a #${id} hospital`;
    }
    update(id, updateHospitalDto) {
        return `This action updates a #${id} hospital`;
    }
    remove(id) {
        return `This action removes a #${id} hospital`;
    }
};
HospitalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(hospital_entity_1.Hospital)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HospitalService);
exports.HospitalService = HospitalService;
//# sourceMappingURL=hospital.service.js.map