import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamenService } from 'src/app/services/examen.service';
import { CategoriaService } from '../../../services/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-examen',
  templateUrl: './actualizar-examen.component.html',
  styleUrls: ['./actualizar-examen.component.css']
})
export class ActualizarExamenComponent implements OnInit {

  constructor(private route: ActivatedRoute, private examenService: ExamenService,
              private categoriaService: CategoriaService, private router: Router) {}

  examenid = 0;
  examen: any;
  categorias: any;

  ngOnInit(): void {
    this.examenid = this.route.snapshot.params['examenId'];
    this.examenService.obtenerExamenId(this.examenid).subscribe({
      next: (data) => {
        this.examen = data;
        console.log(this.examen);
      },
      error: (error) => {
        console.log(error);
      }
    })

    this.categoriaService.listarCategorias().subscribe({
      next: (data) => {
        this.categorias = data;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  public actualizarDatos() {
    this.examenService.actualizarExamen(this.examen).subscribe({
      next: (data) => {
        Swal.fire('Examen actualizado','Examen actualizado con exito','success').then(
          (e) => {
            this.router.navigate(['/admin/examenes'])
          }
        );
      },
      error: (error) => {
        Swal.fire('Error','No se ha podido actualizar el examen','error')
        console.log(error);
      }
    })
  }

}
