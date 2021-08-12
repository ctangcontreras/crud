import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Service } from 'src/app/servicios/service';

@Component({
  selector: 'app-modal-sucursal',
  templateUrl: './modal-sucursal.component.html',
  styleUrls: ['./modal-sucursal.component.css']
})
export class ModalSucursalComponent implements OnInit {



  firstFormGroup: FormGroup = this._formBuilder.group({
    intCodigo: ['', [Validators.required]],
    strNombre: ['', [Validators.required]]

  });


  constructor(private _formBuilder: FormBuilder, public dialogRef: MatDialogRef<ModalSucursalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private service: Service) {


    if (data === null || data === undefined) {
      return;
    }

    this.firstFormGroup = this._formBuilder.group({
      intCodigo: [data.data.cod_sucursal, [Validators.required]],
      strNombre: [data.data.nombre, [Validators.required]] 

    });
    console.log(this.firstFormGroup.value);

  }

  ngOnInit(): void {


  }


  grabarSucursal() {

    let param = {
      cod_sucursal: this.firstFormGroup.value.intCodigo,
      nombre: this.firstFormGroup.value.strNombre
    }

    console.log(param);
    this.getGrabar(param);
  }



  private getGrabar(param: any) {

    this.service.agregarSucursal(param).subscribe((data) => {

      this.dialogRef.close(true);

    }, (err) => {

    });
  }
}
