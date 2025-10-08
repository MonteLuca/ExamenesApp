import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-categorias',
  templateUrl: './add-categorias.component.html',
  styleUrls: ['./add-categorias.component.css']
})
export class AddCategoriasComponent implements OnInit {

  categoria = {
    titulo : '',
    descripcion : ''
  }

  constructor(private categoriaService: CategoriaService, private snack: MatSnackBar, private router: Router) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  formSubmit(){

    if(this.categoria.titulo.trim() == '' || this.categoria.titulo == null) {
      this.snack.open("El titulo es requerido", '',{
        duration: 3000
      })
      return;
    }

    this.categoriaService.agregarCategoria(this.categoria).subscribe(
      (data: any) => {
        this.categoria.titulo = '';
        this.categoria.descripcion = '';
        Swal.fire('Categoria agregada','La categoria ha sido agregada con exito','success');
        this.router.navigate(['/admin/categorias']);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error', 'Error al guardar la categoria','error');
      }
    )
  }
}
