import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamenService } from 'src/app/services/examen.service';

@Component({
  selector: 'app-load-examen',
  templateUrl: './load-examen.component.html',
  styleUrls: ['./load-examen.component.css']
})
export class LoadExamenComponent implements OnInit {

  catId:any;
  examenes: any;

  constructor(private route: ActivatedRoute, private examenService: ExamenService){}

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.catId = params['catId']
      if (this.catId == 0) {
        console.log("Cargando todos los examenes");
        this.examenService.obtenerExamenesActivos().subscribe({
          next: (data) => {
            this.examenes = data;
            console.log(this.examenes);
          },
          error: (error) => {
            console.log(error);

          }
        })
      } else {
        console.log("Cargando un examen especifico");
        this.examenService.obtenerExamenesActivosDeUnaCategoria(this.catId).subscribe({
          next: (data) => {
            this.examenes = data
            console.log(data);
          },
          error: (error) => {
            console.log(error);
          }
        })
      }
    })
  }
}
