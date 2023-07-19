import { Component } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.css'],
})
export class CrearPacienteComponent {
  array: Object[] = [];
  patient$!: Observable<any>;

  patient: any;
  midoctors: any[] = [];
  hospitales: any[] = [];
  pacienteId: any;
  
  formPatient = this.fb.group({
    name: [''],
    surname: [''],
    dni: [''],
    hospitalId:[null],
    doctors:[[]]
  });
  constructor(
    private pacienteSevice: PacienteService,

    private fb: FormBuilder,
    private router: Router,
  ) {}
  ngOnInit() {
    this.pacienteSevice.getAllDoctors().subscribe((data: any) => {
      this.midoctors = data;
    });
    this.pacienteSevice.getAllHospital().subscribe((data: any) => {
      this.hospitales = data;
    });
  }
  
  enviarPatient() {
    this.pacienteSevice
      .creaPaciente(this.formPatient.value)
      .subscribe((data: any) => {
       console.log('envio paciente', data)

        
       
      });
     
  }
}
