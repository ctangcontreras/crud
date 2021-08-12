import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class Service {

  private readonly LISTAR_PRODUCTOS: string = 'http://localhost:9191/products';
  private readonly AGREGAR_PRODUCTO: string = 'http://localhost:9191/addProduct';
  private readonly ELIMINAR_PRODUCTO: string = 'http://localhost:9191/deleteProduct';

  private readonly LISTAR_SUCURSAL: string = 'http://localhost:9191/sucursales';
  private readonly AGREGAR_SUCURSAL: string = 'http://localhost:9191/addSucursal';
  private readonly ELIMINAR_SUCURSAL: string = 'http://localhost:9191/deleteSucursal';

  private readonly LISTAR_USUARIO: string = 'http://localhost:9191/usuarios';
  private readonly AGREGAR_USUARIO: string = 'http://localhost:9191/addUsuario';
  private readonly ELIMINAR_USUARIO: string = 'http://localhost:9191/deleteUsuario';

  constructor(private http: HttpClient) { }




  public listarProductos(): Observable<any> {
    return this.http.get<any>(this.LISTAR_PRODUCTOS)
      .pipe(
        catchError(this.handleError)
      );
  }

  public agregarProducto(data: any): Observable<any> {
    return this.http.post<any>(this.AGREGAR_PRODUCTO, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  public eliminarProducto(data: any): Observable<any> {
    let nuevaUrl = this.ELIMINAR_PRODUCTO + "/" + data;
    return this.http.post<any>(nuevaUrl, data)
      .pipe(
        catchError(this.handleError)
      );
  }



  public listarSucursal(): Observable<any> {
    return this.http.get<any>(this.LISTAR_SUCURSAL)
      .pipe(
        catchError(this.handleError)
      );
  }

  public agregarSucursal(data: any): Observable<any> {
    return this.http.post<any>(this.AGREGAR_SUCURSAL, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  public eliminarSucursal(data: any): Observable<any> {
    let nuevaUrl = this.ELIMINAR_SUCURSAL + "/" + data;
    return this.http.post<any>(nuevaUrl, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  public listarUsuario(): Observable<any> {
    return this.http.get<any>(this.LISTAR_USUARIO)
      .pipe(
        catchError(this.handleError)
      );
  }

  public agregarUsuario(data: any): Observable<any> {
    return this.http.post<any>(this.AGREGAR_USUARIO, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  public eliminarUsuario(data: any): Observable<any> {
    let nuevaUrl = this.ELIMINAR_USUARIO + "/" + data;
    return this.http.post<any>(nuevaUrl, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
