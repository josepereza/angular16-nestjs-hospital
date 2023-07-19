import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PacienteService } from 'src/app/services/paciente.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
} from '@angular/forms';
import { Doctores } from 'src/app/interfaces/doctores';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css'],
})
export class PacienteComponent {
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
    hospitalId: [0],
    doctors: [[0]]
  });
  constructor(
    private pacienteSevice: PacienteService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) {}
  ngOnInit() {
    this.pacienteSevice.getAllDoctors().subscribe((data: any) => {
      this.midoctors = data;
    });
    this.pacienteSevice.getAllHospital().subscribe((data: any) => {
      this.hospitales = data;
    });
    this.pacienteId = this.route.snapshot.paramMap.get('id');
    console.log(this.pacienteId);
    this.patient$ = this.pacienteSevice.getOne(this.pacienteId);
    this.patient$.subscribe((data) => {
      console.log(data);
      this.patient = data;
      this.formPatient.setValue({
        name: this.patient.name,
        surname: this.patient.surname,
        dni: this.patient.dni,
        hospitalId: this.patient.hospital.id,
        doctors:this.patient.doctors
      });
    });
  }
  enviarDoctores() {
    console.log('formdoctoes.value', this.formDoctores.value);

    this.pacienteSevice
      .actualizaDoctors(this.pacienteId, this.formDoctores.value)
      .subscribe((data) => {
        this.patient$ = this.pacienteSevice.getOne(this.pacienteId);
        this.patient$.subscribe((data) => {
          console.log(data);
          this.patient = data;
        });
      });
  }
  enviarHospital() {
    const objeto = { hospital: { id: this.formHospital.value } };
    console.log('en enviar hospital', objeto);
    console.log('en enviar hospital', this.formHospital.value);
    const id = this.formHospital.value;
    this.pacienteSevice
      .actualizaHospital(this.pacienteId, this.formHospital.value)
      .subscribe((data) => {
        console.log('me cagoito');
      });
  }
  enviarPatient() {
    this.pacienteSevice
      .actualizaPaciente(this.pacienteId, this.formPatient.value)
      .subscribe((data) => {
        this.patient$ = this.pacienteSevice.getOne(this.pacienteId);
        this.patient$.subscribe((data) => {
          console.log(data);
          this.patient = data;
        });
      });
  }
}
