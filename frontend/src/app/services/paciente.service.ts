import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Pacientes } from '../interfaces/pacientes';

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  
  constructor(private http: HttpClient) {}

  getAll():Observable<Pacientes[]> {
    return this.http.get<Pacientes[]>('http://localhost:3000/patient');
  }

  getOne(id: any) {
    return this.http.get(`http://localhost:3000/patient/${id}`);
  }

  getAllDoctors() {
    return this.http.get('http://localhost:3000/doctor');
  }

  
  actualizaDoctors(id:any, doctores:any) {
    console.log('mis doctores',doctores)
    return this.http.post(`http://localhost:3000/patient/${id}/doctors`, doctores);
  }

  getAllHospital(){
    return this.http.get('http://localhost:3000/hospital')
  }
  actualizaHospital(id:any,hospital:any){
    return this.http.patch(`http://localhost:3000/patient/${id}`,hospital)

  }
  creaPaciente(paciente:any){
    return this.http.post('http://localhost:3000/patient',paciente)
  }
}
