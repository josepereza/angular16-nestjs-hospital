export interface Pacientes {
    id:       number;
    name:     string;
    surname:  string;
    dni:      string;
    doctors:  Doctor[];
    hospital: Hospital;
}

export interface Doctor {
    id:   number;
    name: DoctorName;
}

export enum DoctorName {
    DonRamon = "Don Ramon ",
    Isidro2 = "Isidro2",
    Juanjo = "Juanjo",
}

export interface Hospital {
    id:   number;
    name: HospitalName;
    city: City;
}

export enum City {
    Alicante = "Alicante",
    Murcia = "Murcia",
}

export enum HospitalName {
    Arrixaca = "Arrixaca",
    VirgenDelCarmen = "Virgen Del Carmen",
}
