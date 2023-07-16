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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patient = void 0;
const doctor_entity_1 = require("../../doctor/entities/doctor.entity");
const hospital_entity_1 = require("../../hospital/entities/hospital.entity");
const typeorm_1 = require("typeorm");
let Patient = class Patient {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Patient.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Patient.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Patient.prototype, "surname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Patient.prototype, "dni", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => hospital_entity_1.Hospital, (hospital) => hospital.patients, { cascade: true }),
    __metadata("design:type", hospital_entity_1.Hospital)
], Patient.prototype, "hospital", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => doctor_entity_1.Doctor),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Patient.prototype, "doctors", void 0);
Patient = __decorate([
    (0, typeorm_1.Entity)()
], Patient);
exports.Patient = Patient;
//# sourceMappingURL=patient.entity.js.map