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
  formDoctores = new FormControl([], { nonNullable: true });
  formHospital = new FormControl(1, { nonNullable: true });
  formPatient = this.fb.group({
    name: [''],
    surname: [''],
    dni: [''],
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
  enviarDoctores() {
    console.log('pacienteid en enviar doctores', this.pacienteId);

    console.log('formdoctoes.value', this.formDoctores.value);
   
    this.pacienteSevice
      .actualizaDoctors(this.pacienteId, this.formDoctores.value)
      .subscribe((data) => {
       this.pacienteSevice.getOne(this.pacienteId).subscribe(paciente=>{
        this.patient=paciente
       })
      });
  }
  enviarHospital() {
    const objeto = { hospital: { id: this.formHospital.value } };
    console.log(objeto);
    const id = this.formHospital.value;
    this.pacienteSevice
      .actualizaHospital(this.pacienteId, objeto)
      .subscribe((data) => {
        this.patient$ = this.pacienteSevice.getOne(this.pacienteId);
        this.patient$.subscribe((data: any) => {
          console.log(data);
          this.patient = data;
        });
      });
  }
  enviarPatient() {
    this.pacienteSevice
      .creaPaciente(this.formPatient.value)
      .subscribe((data: any) => {
        this.pacienteId = data.id;
        this.enviarDoctores();
        this.enviarHospital();

        
       
      });
     
  }
}
