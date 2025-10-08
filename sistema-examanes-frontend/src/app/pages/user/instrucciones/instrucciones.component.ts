import { Component, OnInit } from '@angular/core';
import { ExamenService } from '../../../services/examen.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instrucciones',
  templateUrl: './instrucciones.component.html',
  styleUrls: ['./instrucciones.component.css']
})
export class InstruccionesComponent implements OnInit {

  examenId:any;
  examen:any = new Object;

  constructor (private examenService:ExamenService, private route:ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.examenId = this.route.snapshot.params['examenId'];
    this.examenService.obtenerExamenId(this.examenId).subscribe({
      next: (data) => {
        this.examen = data;
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  empezarExamen() {
    Swal.fire({
      title: '¿Quieres comenzar el examen?',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      showConfirmButton: true,
      confirmButtonText: 'Aceptar',
      icon: 'info',
    }).then((result:any) => {
      if(result.isConfirmed) {
        this.router.navigate(['/start/'+this.examenId])
      }
    })
  }

}
