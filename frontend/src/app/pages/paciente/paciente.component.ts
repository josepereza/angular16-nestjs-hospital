import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PacienteService } from 'src/app/services/paciente.service';
import { FormControl, FormsModule } from '@angular/forms';
import { Doctores } from 'src/app/interfaces/doctores';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css'],
})
export class PacienteComponent {
  array:Object[]=[]
  patient$!: Observable<any>;
 
  patient: any;
  midoctors: any[] = [];
  hospitales:any[]=[];
  pacienteId: any;
  formDoctores = new FormControl([], { nonNullable: true });
  formHospital = new FormControl([], { nonNullable: true });
  constructor(
    private pacienteSevice: PacienteService,
    private route: ActivatedRoute,
  ) {}
  ngOnInit() {
    this.pacienteSevice.getAllDoctors().subscribe((data: any) => {
      this.midoctors = data;
    });
    this.pacienteSevice.getAllHospital().subscribe((data:any)=>{
  this.hospitales=data
    })
    this.pacienteId = this.route.snapshot.paramMap.get('id');
    console.log(this.pacienteId);
    this.patient$ = this.pacienteSevice.getOne(this.pacienteId);
    this.patient$.subscribe((data) => {
      console.log(data);
      this.patient = data;
    });
  }
  enviarDoctores() {
  
    console.log('formdoctoes.value', this.formDoctores.value);
    this.formDoctores.value.forEach(element => {
      console.log('element',element)
     //const miobjeto2 = {id:element}
     
     this.array.push({id:element})
     
    });

    console.log('miobjeto ', this.array)
    this.pacienteSevice
      .actualizaDoctors(this.pacienteId, this.array)
      .subscribe((data) => {
        console.log(data);
      });
  }
  enviarHospital(){
    const objeto={hospital:{id: this.formHospital.value}}
    console.log(objeto)
    const id=this.formHospital.value
    this.pacienteSevice.actualizaHospital(this.pacienteId,objeto).subscribe(data=>{
      this.patient$ = this.pacienteSevice.getOne(this.pacienteId);
    this.patient$.subscribe((data) => {
      console.log(data);
      this.patient = data;
    });
    })
  }
}
