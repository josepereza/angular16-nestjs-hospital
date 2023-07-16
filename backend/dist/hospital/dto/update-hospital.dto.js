"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHospitalDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_hospital_dto_1 = require("./create-hospital.dto");
class UpdateHospitalDto extends (0, mapped_types_1.PartialType)(create_hospital_dto_1.CreateHospitalDto) {
}
exports.UpdateHospitalDto = UpdateHospitalDto;
//# sourceMappingURL=update-hospital.dto.js.map