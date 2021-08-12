import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Service } from 'src/app/servicios/service';

@Component({
  selector: 'app-modal-usuario',
  templateUrl: './modal-usuario.component.html',
  styleUrls: ['./modal-usuario.component.css']
})
export class ModalUsuarioComponent implements OnInit {

  listaSucursal: any[] = [];

  firstFormGroup: FormGroup = this._formBuilder.group({
    intCodigo: ['', [Validators.required]],
    strNombre: ['', [Validators.required]],
    strUser: ['', [Validators.required]],
    strPassword: ['', [Validators.required]],
    intCodSucursal: ['', [Validators.required]]

  });


  constructor(private _formBuilder: FormBuilder, public dialogRef: MatDialogRef<ModalUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private service: Service) {


    if (data === null || data === undefined) {
      return;
    }

    this.firstFormGroup = this._formBuilder.group({

      intCodigo: [data.data.cod_usuario,],
      strNombre: [data.data.nombre, [Validators.required]],
      strUser: [data.data.user, [Validators.required]],
      strPassword: [data.data.password, [Validators.required]],
      intCodSucursal: [data.data.cod_sucursal, [Validators.required]]

    });
    console.log(this.firstFormGroup.value);

  }

  ngOnInit(): void {
    this.getListarSucursal();

  }


  grabarUsuario() {

    let param = {
      cod_usuario: this.firstFormGroup.value.intCodigo,
      nombre: this.firstFormGroup.value.strNombre,
      user: this.firstFormGroup.value.strUser,
      password: this.firstFormGroup.value.strPassword,
      cod_sucursal: this.firstFormGroup.value.intCodSucursal
    }

    console.log(param);
    this.getGrabar(param);
  }



  private getGrabar(param: any) {

    this.service.agregarUsuario(param).subscribe((data) => {

      this.dialogRef.close(true);

    }, (err) => {

    });
  }


  private getListarSucursal() {
    this.listaSucursal = [];
    this.service.listarSucursal().subscribe((data) => {
      console.log(data);
      this.listaSucursal = data;
    }, (err) => {

    });
  }
}
