import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Service } from 'src/app/servicios/service';

@Component({
  selector: 'app-modal-producto',
  templateUrl: './modal-producto.component.html',
  styleUrls: ['./modal-producto.component.css']
})
export class ModalProductoComponent implements OnInit {


  firstFormGroup: FormGroup = this._formBuilder.group({
    intCodigo: ['', [Validators.required]],
    strNombre: ['', [Validators.required]],
    intPrecio: ['', [Validators.required]]

  });


  constructor(private _formBuilder: FormBuilder, public dialogRef: MatDialogRef<ModalProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private service: Service) {


    if (data === null || data === undefined) {
      return;
    }

    this.firstFormGroup = this._formBuilder.group({
      intCodigo: [data.data.cod_producto, [Validators.required]],
      strNombre: [data.data.nombre, [Validators.required]],
      intPrecio: [data.data.precio, [Validators.required]]

    });
    console.log(this.firstFormGroup.value);

  }

  ngOnInit(): void {


  }


  grabarProducto() {

    let param = {
      cod_producto: this.firstFormGroup.value.intCodigo,
      nombre: this.firstFormGroup.value.strNombre,
      precio: this.firstFormGroup.value.intPrecio
    }

    console.log(param);
    this.getGrabar(param);
  }



  private getGrabar(param: any) {

    this.service.agregarProducto(param).subscribe((data) => {

      this.dialogRef.close(true);

    }, (err) => {

    });
  }
}
