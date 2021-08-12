import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalProductoComponent } from './pages/modal-producto/modal-producto.component';
import { Service } from './servicios/service';
import { Util } from 'src/app/clases/Util';
import { ModalSucursalComponent } from './pages/modal-sucursal/modal-sucursal.component';
import { ModalUsuarioComponent } from './pages/modal-usuario/modal-usuario.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud';

  bMostrarSucursal: boolean = false;
  bMostrarProducto: boolean = false;
  bMostrarUsuario: boolean = false;

  displayedColumnsProducto: string[] = ['codigo', 'name', 'precio', 'accion'];
  dataSourceProducto: any[] = [];

  displayedColumnsSucursal: string[] = ['codigo', 'name', 'accion'];
  dataSourceSucursal: any[] = [];

  displayedColumnsUsuario: string[] = ['codigo', 'name', 'user', 'password', 'sucursal', 'accion'];
  dataSourceUsuario: any[] = [];

  constructor(private router: Router, private _formBuilder: FormBuilder, public dialog: MatDialog,
    private service: Service) { }

  ngOnInit() {

    this.bMostrarSucursal  = false;
    this.bMostrarProducto  = false;
    this.bMostrarUsuario  = false;
  }


  listarProductos() {
    this.bMostrarSucursal  = false;
    this.bMostrarProducto  = true;
    this.bMostrarUsuario  = false;

    this.getListarProductos();
  }

  eliminarProducto(row: any) {
    console.log(row);
    this.getEliminarProducto(row.cod_producto);
  }

  listarSucursal() {

    this.bMostrarSucursal  = true;
    this.bMostrarProducto  = false;
    this.bMostrarUsuario  = false;


    this.dataSourceProducto = [];
    this.dataSourceSucursal = [];
    this.getListarSucursal();
  }
  
  listarUsuario() {

    this.bMostrarSucursal  = false;
    this.bMostrarProducto  = false;
    this.bMostrarUsuario  = true;


    this.dataSourceProducto = [];
    this.dataSourceSucursal = [];
    this.getListarUsuario();
  }

  eliminarSucursal(row: any) {
    console.log(row);
    this.getEliminarSucursal(row.cod_sucursal);
  }

  eliminarUsuario(row: any) {
    console.log(row);
    this.getEliminarUsuario(row.cod_usuario);
  }

  openModalProducto(row: any) {
    console.log(row);

    let dialogRef: any;

    let data: any = Util.clonar(row);

    dialogRef = this.dialog.open(ModalProductoComponent, {
      disableClose: false,
      width: '900px',
      height: '400px',
      data: { data }
    });

    this.dialog.afterAllClosed.subscribe(
      () => {
        this.listarProductos();
      }
    );
  }

  openModalSucursal(row: any) {
    console.log(row);

    let dialogRef: any;

    let data: any = Util.clonar(row);

    dialogRef = this.dialog.open(ModalSucursalComponent, {
      disableClose: false,
      width: '900px',
      height: '400px',
      data: { data }
    });

    this.dialog.afterAllClosed.subscribe(
      () => {
        this.listarSucursal();
      }
    );

  }

  openModalUsuario(row: any) {
    console.log(row);

    let dialogRef: any;

    let data: any = Util.clonar(row);

    dialogRef = this.dialog.open(ModalUsuarioComponent, {
      disableClose: false,
      width: '900px',
      height: '400px',
      data: { data }
    });

    this.dialog.afterAllClosed.subscribe(
      () => {
        this.listarUsuario();
      }
    );

  }


  openModalGrabarSucursal() {

    let dialogRef: any;

    dialogRef = this.dialog.open(ModalSucursalComponent, {
      disableClose: false,
      width: '900px',
      height: '400px',
      data: undefined
    });


    this.dialog.afterAllClosed.subscribe(
      () => {
        this.listarSucursal();
      }
    );
  }

  openModalGrabarUsuario() {

    let dialogRef: any;

    dialogRef = this.dialog.open(ModalUsuarioComponent, {
      disableClose: false,
      width: '900px',
      height: '400px',
      data: undefined
    });

    this.dialog.afterAllClosed.subscribe(
      () => {
        this.listarUsuario();
      }
    );


  }

  openModalGrabar() {


    let dialogRef: any;



    dialogRef = this.dialog.open(ModalProductoComponent, {
      disableClose: false,
      width: '900px',
      height: '400px',
      data: undefined
    });

    this.dialog.afterAllClosed.subscribe(
      () => {
        this.listarProductos();
      }
    );


  }

  private getListarProductos() {
    this.dataSourceProducto = [];
    this.service.listarProductos().subscribe((data) => {
      console.log(data);
      this.dataSourceProducto = data;
    }, (err) => {

    });
  }

  private getEliminarProducto(param: any) {

    this.service.eliminarProducto(param).subscribe((data) => {
      console.log(data);

      this.getListarProductos();
    }, (err) => {

    });
  }



  private getListarSucursal() {
    this.dataSourceSucursal = [];
    this.service.listarSucursal().subscribe((data) => {
      console.log(data);
      this.dataSourceSucursal = data;
    }, (err) => {

    });
  }

  private getEliminarSucursal(param: any) {

    this.service.eliminarSucursal(param).subscribe((data) => {
      console.log(data);

      this.getListarProductos();
    }, (err) => {

    });
  }



  private getListarUsuario() {
    this.dataSourceUsuario = [];
    this.service.listarUsuario().subscribe((data) => {
      console.log(data);
      this.dataSourceUsuario = data;
    }, (err) => {

    });
  }

  private getEliminarUsuario(param: any) {

    this.service.eliminarUsuario(param).subscribe((data) => {
      console.log(data);

      this.getListarProductos();
    }, (err) => {

    });
  }

}
