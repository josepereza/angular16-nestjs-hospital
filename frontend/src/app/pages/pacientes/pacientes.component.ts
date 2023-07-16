import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css'],
})
export class PacientesComponent implements OnInit {
  constructor(
    private pacienteService: PacienteService,
    private router: Router,
  ) {}
  selectedValue!: string;

  pacientes: any[] = [];
  hospitales: any[] = [];

  ngOnInit(): void {
          
this.pacienteService.getAllHospital().subscribe((data:any)=>{
  this.hospitales=data;
})

 this.pacienteService.getAll().subscribe((data: any) => {
  console.log(data);
  this.pacientes = data; 
}) 


    };
 

  verPaciente(pacienteId: any) {
    this.router.navigate(['paciente', pacienteId]);
  }
  seleccion(event: any){
    console.log(event)
    this.pacienteService.getAll().subscribe(data=>{
      this.pacientes=data.filter(paciente=>paciente.hospital.name==event)
    
     
    })
    console.log(this.pacientes)
  }
}
