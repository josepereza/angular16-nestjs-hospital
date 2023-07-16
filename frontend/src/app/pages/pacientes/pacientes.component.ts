import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, filter } from 'rxjs';
import { Pacientes } from 'src/app/interfaces/pacientes';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css'],
})
export class PacientesComponent implements OnInit, AfterViewInit{
  
  constructor(
    private pacienteService: PacienteService,
    private router: Router,
  ) {
   
  }
  ngAfterViewInit(): void {
  
  }
  selectedValue!: string;

  pacientes: any[] = [];
  hospitales: any[] = [];

  ngOnInit(): void {
    this.pacienteService.getAll().subscribe(data=>{
      this.pacientes=data
    console.log('pacientes en pacientes-component',this.pacientes)
     
    })
          
this.pacienteService.getAllHospital().subscribe((data:any)=>{
  this.hospitales=data;
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
